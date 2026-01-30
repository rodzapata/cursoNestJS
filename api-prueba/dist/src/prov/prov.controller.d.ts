import { ProvService } from './prov.service';
import { CreateProvDto } from './dto/create-prov.dto';
import { UpdateProvDto } from './dto/update-prov.dto';
export declare class ProvController {
    private readonly provService;
    constructor(provService: ProvService);
    create(createProvDto: CreateProvDto): string;
    findAll(): Promise<{
        id: number;
        name: string | null;
        email: string;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateProvDto: UpdateProvDto): string;
    remove(id: string): string;
}
