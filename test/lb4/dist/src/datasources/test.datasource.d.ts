import { juggler } from '@loopback/repository';
export declare class TestDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
