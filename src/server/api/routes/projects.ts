import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { Prisma, enum_Projects_skillLevel, enum_Projects_timeline } from "@prisma/client";

type ProjectsWhereInput = Prisma.ProjectsWhereInput;

const projectRouter = createTRPCRouter({
    getAll:publicProcedure.input(z.object({
        skillLevel: z.array(z.string()).optional(),
        timeline: z.array(z.string()).optional(),
        skillIds: z.array(z.string()).optional(),
        skip: z.number().optional(),
        take: z.number().optional()
    })).query(async ({ctx, input}) => {
        const where:ProjectsWhereInput = {}
        if(input.skillLevel && input.skillLevel.length){
            where['skillLevel'] = {
                in: input.skillLevel as enum_Projects_skillLevel[]
            }
        }
        if(input.timeline && input.timeline.length){
            where['timeline'] = {
                in: input.timeline as enum_Projects_timeline[]
            }
        }
        if(input.skillIds && input.skillIds.length){
            where['ProjectSkills'] = {
                some: {
                    skillId:{
                        in: input.skillIds
                    }
                }
            }
        }
        return ctx.prisma.projects.findMany({
            where,
            orderBy:{
                createdAt: 'desc'
            },
            skip:input.skip,
            take:input.take
        })
    }),
    getAllCount:publicProcedure.input(z.object({
        skillLevel: z.array(z.string()).optional(),
        timeline: z.array(z.string()).optional(),
        skillIds: z.array(z.string()).optional()
    })).query(async ({ctx, input}) => {
        const where:ProjectsWhereInput = {}
        if(input.skillLevel && input.skillLevel.length){
            where['skillLevel'] = {
                in: input.skillLevel as enum_Projects_skillLevel[]
            }
        }
        if(input.timeline && input.timeline.length){
            where['timeline'] = {
                in: input.timeline as enum_Projects_timeline[]
            }
        }
        if(input.skillIds && input.skillIds.length){
            where['ProjectSkills'] = {
                some: {
                    skillId:{
                        in: input.skillIds
                    }
                }
            }
        }
        return ctx.prisma.projects.count({
            where
        })
    })
})

export default projectRouter;