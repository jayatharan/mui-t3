import React, { useState, FC, useEffect } from 'react';
import {
    Box,
    Stack,
    Autocomplete,
    TextField
} from '@mui/material';
import FilterHeading from './FilterHeading';
import { api } from '@/utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import { Skills } from '@prisma/client';

interface Props {
    handleFilterChange:(skillIds:string[]) => void;
}

const SkillsFilter:FC<Props> = ({handleFilterChange}) => {
    const [selectedSkills, setSelectedSkills] = useState<Skills[]>([]);
    const skillsQuery = api.skill.getAll.useQuery({});

    useEffect(() => {
        handleFilterChange(selectedSkills.map(skill => skill.id))
    },[selectedSkills])

    return (
        <Box>
            <FilterHeading title="Skills" />
            <Stack mt={2}>
                <Autocomplete 
                    multiple
                    size='small'
                    value={selectedSkills}
                    onChange={(_, value) => setSelectedSkills(value)}
                    getOptionLabel={(option) => option.title}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    options={skillsQuery.data??[]}
                    loading={skillsQuery.isFetching || skillsQuery.isLoading}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search for skills"
                        size='small'
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <React.Fragment>
                              {(skillsQuery.isFetching || skillsQuery.isLoading) ? <CircularProgress color="inherit" size={20} /> : null}
                              {params.InputProps.endAdornment}
                            </React.Fragment>
                          ),
                        }}
                      />
                    )}
                />
            </Stack>
        </Box>
    )
}

export default SkillsFilter