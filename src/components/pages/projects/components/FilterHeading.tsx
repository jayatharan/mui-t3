import {FC} from 'react'
import {Typography} from "@mui/material";

interface Props {
    title:string
}

const FilterHeading:FC<Props> = ({title}) => {
  return <Typography fontWeight={700} fontSize={14} textTransform={'uppercase'} color={"#747474"}>{title}</Typography>
}

export default FilterHeading