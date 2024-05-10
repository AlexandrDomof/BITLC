export interface ScFrage {
    qid: number,
    qtyp: string,
    qtxt: string[],
    qanswers: ScAnswer[],
    qcorrect?: string,
    qinfo: string[],

}

export interface ScAnswer {
    txt: string[],
    correct?: boolean,
}


