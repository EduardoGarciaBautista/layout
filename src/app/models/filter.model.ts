import {DropDownModel} from "@models/drop-down.model";

export interface FilterModel {
    query: string;
    page: Page | null;
    alphabet: DropDownModel | null;
    type: DropDownModel | null;
    viewType: number;
}

interface Page extends DropDownModel {
    actualPage?: number;
}
