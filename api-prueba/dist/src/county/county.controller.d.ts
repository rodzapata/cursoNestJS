import { CountyService } from './county.service';
import { CreateCountyDto } from './dto/create-county.dto';
import { UpdateCountyDto } from './dto/update-county.dto';
export declare class CountyController {
    private readonly countyService;
    constructor(countyService: CountyService);
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
    findOne(id: string): string;
    update(id: string, updateCountyDto: UpdateCountyDto): string;
    remove(id: string): string;
}
