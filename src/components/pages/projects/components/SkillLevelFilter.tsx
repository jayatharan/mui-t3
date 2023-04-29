import {FC} from 'react'
import {
    Box,
    FormGroup,
    Divider
} from "@mui/material"
import FilterHeading from './FilterHeading'
import { ProjectSkillLevelDisplayValue } from '@/application/constants/project'
import FilterOption from './FilterOption'

interface Props {
    skillLevel:string[];
    handleFilterChange:(filterField: "skillIds" | "timeline" | "skillLevel", value: string, add: boolean) => void;
}

const SkillLevelFilter:FC<Props> = ({
    handleFilterChange,
    skillLevel
}) => {
    return (
        <Box>
            <FilterHeading title="Skill level" />
            <FormGroup sx={{ mt: 1, gap: 0.25 }}>
                {Object.entries(ProjectSkillLevelDisplayValue).map(([key, value], index) => (
                    <FilterOption
                        key={index}
                        value={skillLevel.some(v => v === key)}
                        label={value}
                        onToggle={(checked) => {
                            handleFilterChange("skillLevel", key, checked)
                        }}
                    />
                ))}
            </FormGroup>
            <Divider sx={{ my: 2 }} />
        </Box>
    )
}

export default SkillLevelFilter