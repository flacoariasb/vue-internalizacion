export interface InfoMatrizInterface {
    sede:           Sede[];
    codigo:         Codigo[];
    pais:           Pais[];
    tipo:           Tipo[];
    area:           Area[];
    financiamiento: Financiamiento[];
}

//interareaconocimiento
export interface Area {
    ARE_ID:          string;
    AESP_ID:         string;
    ARE_CODIGO:      string;
    ARE_DESCRIPCION: string;
    ARE_ESTADO:      string;
}

//intercarrera
export interface Codigo {
    ICAR_ID:     string;
    ICAR_CODIGO: string;
    CAR_ID:      string;
    MOD_ID:      string;
    NIV_ID:      string;
    SED_ID:      string;
    ICAR_ESTADO: string;
}

//inter-financiamiento
export interface Financiamiento {
    FIN_ID:   string;
    FIN_TIPO: string;
    FIN_ESTADO: string;
}

//inter-pais
export interface Paises {
    PAI_ID:   string;
    PAI_PAIS: string;
    PAI_ESTADO: string;
}

//intersede
export interface Sedes {
    SED_ID:     string;
    SED_SEDE:   string;
    SED_ESTADO: string;
}

//intertipoparticipante
export interface Tipo {
    PTIP_ID:   string;
    PTIP_TIPO: string;
    PTIP_ESTADO: string;
}

export interface Modalidad {
    MOD_ID:   string;
    MOD_DESCRIPCION: string;
    MOD_ESTADO: string;
}

export interface Nivel {
    NIV_ID:   string;
    NIV_DESCRIPCION: string;
    NIV_ESTADO: string;
}

export interface Caracteristica {
    CAR_ID:   string;
    CAR_DESCRIPCION: string;
    CAR_ESTADO: string;
}

export interface AreaSede {
    AESP_ID:   string;
    AESP_DESCRIPCION: string;
    AESP_ESTADO: string;
}

export interface AreaSedeInfo {
    AESP_ID:   string;
    AESP_DESCRIPCION: string;
    AESP_ESTADO: string;
    SED_ID: string;
    SED_SEDE: string;
    SED_ESTADO: string;
}

export interface VinculacionTipoPractica{
    VINTP_ID: string;
    VINTP_DESCRIPCION: string;
    VINTP_ESTADO: string;
}
