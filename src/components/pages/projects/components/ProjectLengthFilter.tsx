import {FC} from 'react'
import {
    Box,
    FormGroup,
    Divider
} from "@mui/material"
import FilterHeading from './FilterHeading'
import { ProjectTimeLineDisplayValues } from '@/application/constants/project'
import FilterOption from './FilterOption'

interface Props {
    timeline:string[];
    handleFilterChange:(filterField: "skillIds" | "timeline" | "skillLevel", value: string, add: boolean) => void;
}

const ProjectLengthFilter:FC<Props> = ({
    handleFilterChange,
    timeline
}) => {
    return (
        <Box>
            <FilterHeading title="Project Length" />
            <FormGroup sx={{ mt: 1, gap: 0.25 }}>
            {Object.entries(ProjectTimeLineDisplayValues).map(([key, value], index) => (
                <FilterOption
                key={index}
                value={timeline.some(v => v === key)}
                label={value}
                onToggle={(checked) => {
                    handleFilterChange("timeline", key, checked)
                }}
                />
            ))}
            </FormGroup>
            <Divider sx={{ my: 2 }} />
        </Box>
    )
}

export default ProjectLengthFilter