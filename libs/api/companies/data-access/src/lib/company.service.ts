import { Injectable } from '@nestjs/common';
import { Company, COMPANIES } from '@tuskdesk-suite/company-utils';
import { User } from '@tuskdesk-suite/user-utils';

@Injectable()
export class CompanyService {
  private companies: Company[] = [...COMPANIES];

  findAll(): Company[] {
    return this.companies;
  }

  findById(id: number): Company {
    return this.companies.find(company => company.id === id);
  }
}
