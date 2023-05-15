import {FC} from 'react'
import {FormControlLabel, Checkbox, Typography} from "@mui/material"

interface Props {
    value:boolean;
    onToggle:(value:boolean) => void;
    label: string;
}

const FilterOption:FC<Props> = ({
    label,
    onToggle,
    value
}) => {
  return (
    <FormControlLabel 
        control={<Checkbox sx={{p:0, mx:1}} checked={value} onChange={(event) => onToggle(event.target.checked)} />} 
        label={<Typography fontSize={16} color={'#747474'} fontWeight={400}>{label}</Typography>} 
    />
  )
}

export default FilterOption