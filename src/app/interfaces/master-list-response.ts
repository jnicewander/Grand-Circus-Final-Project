export interface MasterListResponse {
    records: MasterListRecords[]
}

export interface MasterListRecords {
    id: string,
    fields: MasterListFields,
    createdTime: string
}

export interface MasterListFields {
    "Company Name": string,
    "Review Date": string,
    "Date Added": string,
    "Scout": string,
    "Company Website": string,
    "City": string,
    "Country": string,
    "Two Line Company Summary": string,
    "Alignment": string,
    "Theme(s)": string,
    "Technology Areas": string,
    "Uniqueness": string,
    "Team": string,
    "Raised": string
}