/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Club as PrismaClub } from "@prisma/client";

export class ClubServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ClubCountArgs, "select">): Promise<number> {
    return this.prisma.club.count(args);
  }

  async clubs(args: Prisma.ClubFindManyArgs): Promise<PrismaClub[]> {
    return this.prisma.club.findMany(args);
  }
  async club(args: Prisma.ClubFindUniqueArgs): Promise<PrismaClub | null> {
    return this.prisma.club.findUnique(args);
  }
  async createClub(args: Prisma.ClubCreateArgs): Promise<PrismaClub> {
    return this.prisma.club.create(args);
  }
  async updateClub(args: Prisma.ClubUpdateArgs): Promise<PrismaClub> {
    return this.prisma.club.update(args);
  }
  async deleteClub(args: Prisma.ClubDeleteArgs): Promise<PrismaClub> {
    return this.prisma.club.delete(args);
  }
}
