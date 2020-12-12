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
                <LinkTools linkgo="/teste" title="Conversor de Texto" subtitle="Conversor de Texto" description="Converta seus texto mais rapido com essa ferramenta" />
                <LinkTools linkgo="/teste" title="Conversor de Texto" subtitle="Conversor de Texto" description="Converta seus texto mais rapido com essa ferramenta" />
                <LinkTools linkgo="/teste" title="Conversor de Texto" subtitle="Conversor de Texto" description="Converta seus texto mais rapido com essa ferramenta" />
                <LinkTools linkgo="/teste" title="Conversor de Texto" subtitle="Conversor de Texto" description="Converta seus texto mais rapido com essa ferramenta" />
                <LinkTools linkgo="/teste" title="Conversor de Texto" subtitle="Conversor de Texto" description="Converta seus texto mais rapido com essa ferramenta" />
            </div>

        </div>

    )
}