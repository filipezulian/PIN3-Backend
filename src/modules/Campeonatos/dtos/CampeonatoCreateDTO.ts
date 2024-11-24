interface CampeonatoCreateDTO {
    chav_id: number
    qntTimes: number
    nome: string
    dataInicio: Date
    dataFim: Date
    esporte_id: number
    times: number[]
    descricao: string
}

export { CampeonatoCreateDTO } 
