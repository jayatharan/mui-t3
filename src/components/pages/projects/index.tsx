import { RouterInputs, RouterOutputs, api } from '@/utils/api'
import React, { useEffect, useState } from 'react'
import {
  Container,
  Grid,
  Stack,
  Typography,
  Box,
  Pagination
} from "@mui/material"
import SkillLevelFilter from './components/SkillLevelFilter';
import ProjectLengthFilter from './components/ProjectLengthFilter';
import SkillsFilter from './components/SkillsFilter';

//type GetProjectsInput = RouterInputs["project"]["getAll"];

const limit = 10;

const ProjectContent = () => {
  const [page, setPage] = useState(1);
  const [skillIds, setSkillIds] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string[]>([]);

  const projectsQuery = api.project.getAll.useQuery({
    skillIds,
    skillLevel,
    timeline,
    take: limit,
    skip: (page-1)*limit
  },{
    enabled:false
  });

  const projectsCountQuery = api.project.getAllCount.useQuery({
    skillIds,
    skillLevel,
    timeline
  },{
    enabled:false
  })

  const handlePageChange = (pageValue:number) => {
    setPage(pageValue);
  }

  const handleFilterChange = (filterField: "skillIds" | "timeline" | "skillLevel", value: string, add: boolean) => {
    setPage(1);
    if (add) {
      if(filterField === 'skillIds'){
        setSkillIds(prev => [...prev, value]);
      }else if(filterField === 'timeline'){
        setTimeline(prev => [...prev, value]);
      }else if(filterField === 'skillLevel'){
        setSkillLevel(prev => [...prev, value]);
      }
    }else {
      if(filterField === 'skillIds'){
        setSkillIds(prev => prev.filter(v => v !== value))
      }else if(filterField === 'timeline'){
        setTimeline(prev => prev.filter(v => v !== value));
      }else if(filterField === 'skillLevel'){
        setSkillLevel(prev => prev.filter(v => v !== value));
      }
    }
    setPage(1);
  }

  useEffect(()=>{
    projectsQuery.refetch();
    projectsCountQuery.refetch();
  },[skillIds, skillLevel, timeline])

  useEffect(() => {
    projectsQuery.refetch();
  },[page])

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <Typography fontSize={24} fontWeight={700} color={"#414141"} mb={2}>Filter By</Typography>
          <Stack>
            <SkillLevelFilter skillLevel={skillLevel} handleFilterChange={handleFilterChange} />
            <ProjectLengthFilter timeline={timeline} handleFilterChange={handleFilterChange} />
            <SkillsFilter handleFilterChange={(value) => setSkillIds(value)} />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={9}>
          <Typography mb={2} color={"#747474"} fontSize={16} fontWeight={400} >{`${projectsCountQuery.data??0} Projects`}</Typography>
          <Stack spacing={2}>
            {projectsQuery.data?.map(project => (
              <Box 
                key={project.id}
                sx={{
                  borderRadius:2,
                  border: '#D5D6D8 2px solid',
                  p:2
                }}
              >
                <Typography fontSize={24} fontWeight={700} >{project.title}</Typography>
                <Typography fontSize={16} fontWeight={400}>{project.description}</Typography>
              </Box>
            ))}
            <Stack flexDirection="row" justifyContent="center">
              <Pagination count={Math.ceil((projectsCountQuery.data??0)/limit)} page={page} onChange={(_, page) => handlePageChange(page)} color='primary' />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProjectContent