
const universidad1 = { 
    name: 'UCP',
    ubication: {
        pais: 'Argentina',
        provincia: 'Formosa',
        departamento: 'Formosa',
        calle: 'Maipú',
        altura: 4625,
        cPostal: 3600,
        mapa: `https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=Maip%C3%BA%204625,%20P3600%20MQC,%20Formosa+(UCP%20UBIC)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`
    },
    yearFundation: 1993,
    academicPrograms: {
        carrerasDeGrado: {
            facultadDeArteDisenioComunicacion: {
                licEnDisenioGrafico: {
                    name: 'Lic. en Diseño Grafico',
                    duration: 4,
                    modality: 'Presencial',
                    finalTitle: 'Licenciado en diseño grafico',
                },
                licEnDisenioDeIndumentariaYTextil: {
                    name: 'Lic. en Diseño de Indumentaria y Textil',
                    duration: 4,
                    modality: 'Presencial',
                    finalTitle: 'Licenciado en Diseño de Indumentaria y Textil'
                },
                licEnPublicidad: {
                    name: 'Lic. en Publicidad',
                    duration: 4,
                    modality: 'Presencial',
                    finalTitle: 'Licenciado en Publicidad'
                }
            },
            facultadDeCienciasEmpresariales: {
                contadorPublico: {
                    name: 'Contador Publico',
                    duration: 5,
                    modality: 'Presencial y a Distancia',
                    finalTitle: 'Contador Público'
                },
                licEnAdministracion: {
                    name: 'Lic. en administración',
                    duration: 4,
                    modality: 'Presencial',
                    finalTitle: 'Licenciado en administracion'
                },
                licEnComercioInternacional: {
                    name: 'Lic. en comercio Internacional',
                    duration: 4.5,
                    modality: 'A distancia',
                    finalTitle: 'Licenciado en Comercio Internacional'
                }
            },
            facuCienciasJuridicasYPoliticas: {
                abogacia: {
                    name: 'Abogacía',
                    duration: 5,
                    modality: 'Presencial y a Distancia',
                    finalTitle: 'Abogado'
                },
                licEnCriminalistica: {
                    name: 'Lic. en criminalistica',
                    duration: 4,
                    modality: 'Presencial',
                    finalTitle: 'Licenciado en Criminalistica '
                },
                escribania: {
                    name: 'Escribanía',
                    duration: 1,
                    modality: 'A distancia',
                    finalTitle: 'Escribano'
                }
            }

        },
        posgrados: {
            EspecializacionEnDerechoPenal: {
                name: 'Especializacion En Derecho Penal',
                startDate: 'Agosto 2023',
                duration: '22 meses',
                modality: 'Presencial/Virtual',
                description: 'La carrera reconoce en su estructura la construcción típica del conocimiento penal actual que, además, contempla las particularidades de nuestra region: la situacion de provincias fronterizas (Corrientes, Formosa, Misiones) y la especial situacion de pobreza del NEA, favorecedora de situaciones de alta vulnerabilidad en un amplio segmento de la población de los estados provinciales, favoreciendo la “mano de obra barata” para el tráfico de drogas y la explotación de personas (trata laboral y trata con fines sexuales). Elio justifica la preferential atención que se brinda en el Plan de Estudio a delitos como el contrabando, el tráfico de estupefacientes y la trata de personas, entre otros problemas.'
            },
            espEnInterPsico: {
                name: 'Especializacion en Intervenciones Psicoeducativas',
                startDate: 'Junio 2023',
                duration: '24 meses',
                modality: 'Virtual',
                description: 'Consiste en educar e informar, tanto al menor con un trastorno en el desarrollo como a su familia, sobre las características específicas de su patología, cómo gestionarla para minimizar sus efectos y cómo intervenir para mejorar su calidad de vida.',
            },
            espEnMagisYGestionJudic: {
                name: 'Especialización en Magistratura y Gestión Judicial',
                startDate: 'Agosto 2023',
                duration: '19 meses',
                modality: 'Presencial',
                description: 'La carrera pretende contribuir a la formación sistemática de abogados en el ejercicio de la magistratura o con pretensiones de desarrollar una carrera en dicho ámbito mediante la profundización del saber jurídico y la capacitación integral para las funciones inherentes a las distintas categorías de Magistrados y Funcionarios, tanto de los Poderes Judiciales como de los Ministerios Públicos Fiscales y de la Defensa.',
            }
        },
    }
}

const universidad2 = {
    name: 'UNAF',
    ubication: {
        pais: 'Argentina',
        provincia: 'Formosa',
        departamento: 'Formosa',
        calle: 'Av. Dr. Luis Gutniski',
        altura: 3200,
        cPostal: 3600,
        mapa:`<div style="width: 100%"><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=3200%20Avenue%20Formosa,%20Av.%20Dr.%20Luis%20Gutniski,%20P3600%20CMQ,%20Formosa+(UNAF%20UBIC)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Car GPS</a></iframe></div>`
    },
    yearFundation: 1988,
    academicPrograms: {
        carrerasDeGrado: {
            facuEconomiaYNegocios: {
                ContadorPublico: {
                    name: 'Contador Público',
                    duration: 5,
                    modality: 'Presencial',
                    finalTitle: 'Contador Público'
                },
                licEnComercioExterior: {
                    name: 'Lic. en Comercio Exterior',
                    duration: 5,
                    modality: 'Presencial',
                    middleTitle: 'Técnico en comercio exterior',
                    finalTitle: 'Licenciado en Comercio Exterior'
                }
            },
            facuCienciasDeLaSalud: {
                licEnEnfermeria: {
                    name: 'Lic. en Enfermería',
                    duration: 5,
                    modality: 'Presencial',
                    finalTitle: 'Licenciado en Enfermería'
                },
                licEnNutricion: {
                    name: 'Lic. en Nutricion',
                    duration: 5,
                    modality: 'Presencial',
                    middleTitle: 'Técnico en alimentación',
                    finalTitle: 'Licenciado en Nutrición'
                },
                licEnBromatologia: {
                    name: 'Lic. en Bromatología',
                    duration: 5,
                    modality: 'Presencial',
                    middleTitle: 'Técnico en Bromatología',
                    finalTitle: 'Licenciado en Bromatología'
                }
            }
        }
    }
}

export {universidad1, universidad2}