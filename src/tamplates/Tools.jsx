import React from 'react'
import LinkTools from '../components/LinkTools'

export default function Tools() {
    return (
        <div className="container mt-4">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Ferramentas</h1>
                <p className="lead">Area destina a Ferramentas para auxiliar trabalhos da faculdade, calculos matematicos, entre outros...</p>
            </div>
            <div className="row">
                <LinkTools linkgo="/tools/calculator" title="Calculadora Basica" description="Calculadora simples para calculos do dia" icon={<i className="fas fa-calculator"></i>} />
                <LinkTools linkgo="/tools/convert-box" title="Conversor de Texto" description="Converta seus texto mais rapido com essa ferramenta" icon={<i className="fab fa-creative-commons-sa"></i>} />
                <LinkTools linkgo="/tools/convert-base" title="Conversor de Base" description="Converta dados binarios Hexa e Octa para decimal" icon={<i className="fab fa-creative-commons-sa"></i>}/>
                <LinkTools linkgo="/tools/convert-unit" title="Conversor de Medida" description="Conversor de medida KM, metros, etc" icon={<i className="fab fa-creative-commons-sa"></i>}/>
            </div>

        </div>

    )
}