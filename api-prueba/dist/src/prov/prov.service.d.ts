import { CreateProvDto } from './dto/create-prov.dto';
import { UpdateProvDto } from './dto/update-prov.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProvService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createProvDto: CreateProvDto): string;
    findAll(): Promise<{
        id: number;
        name: string | null;
        email: string;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateProvDto: UpdateProvDto): string;
    remove(id: number): string;
}
