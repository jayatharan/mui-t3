import { ProjectSkillLevel, ProjectTimeline } from "../models/Project";

export const ProjectTimeLineDisplayValues = {
    [ProjectTimeline.LESS_THAN_ONE_MONTH]: "Less than 1 months",
    [ProjectTimeline.ONE_TO_THREE_MONTHS]: "1 to 3 Months",
    [ProjectTimeline.THREE_TO_SIX_MONTHS]: "3 to 6 Months",
    [ProjectTimeline.MORE_THAN_SIX_MONTHS]: "More than 6 Months",
}

export const ProjectSkillLevelDisplayValue  = {
    [ProjectSkillLevel.BASIC]: "Basic",
    [ProjectSkillLevel.INTERMEDIATE]: "Intermediate",
    [ProjectSkillLevel.EXPERT]: "Expert"
}