import { CreateCountyDto } from './dto/create-county.dto';
import { UpdateCountyDto } from './dto/update-county.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CountyService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCountyDto: CreateCountyDto): string;
    findAll(): Promise<({
        state: {
            id: number;
            name: string;
            code: string;
            created_at: Date;
            updated_at: Date;
        };
    } & {
        id: number;
        state_id: number;
        name: string;
        code: string;
        created_at: Date;
        updated_at: Date;
    })[]>;
    findOne(id: number): string;
    update(id: number, updateCountyDto: UpdateCountyDto): string;
    remove(id: number): string;
}
