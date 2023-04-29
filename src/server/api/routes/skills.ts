import { Prisma } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

type SkillsWhereInput = Prisma.SkillsWhereInput;

const skillRouter = createTRPCRouter({
    getAll:publicProcedure.input(z.object({

    })).query(async ({ctx, input}) => {
        const where:SkillsWhereInput = {};
        return ctx.prisma.skills.findMany({
        })
    })
})

export default skillRouter;