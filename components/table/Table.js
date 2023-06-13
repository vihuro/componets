import style from './style.module.css';

const listHeadTable = [
    'CÓDIGO',
    'DESCRIÇÃO',
    'SALDO',
    'STATUS',
    'EDIT'
]

const listBody = [
    {
        'id': 1,
        'codigo': 'MP1N101001',
        'descricao': 'flake azul',
        'saldo': 500,
        'status': 'ATIVO',
    },
    {
        'id': 2,
        'codigo': 'MP1N101002',
        'descricao': 'flake VERDE',
        'saldo': 900,
        'status': 'ATIVO',
    },
    {
        'id': 3,
        'codigo': 'MP1N101003',
        'descricao': 'flake LARANJA',
        'saldo': 1000.28,
        'status': 'ATIVO',
    },
    {
        'id': 4,
        'codigo': 'MP1N101004',
        'descricao': 'flake azul',
        'saldo': 100,
        'status': 'ATIVO',
    },
    {
        'id': 5,
        'codigo': 'MP1N101005',
        'descricao': 'PICOTADO DE PET',
        'saldo': 10000,
        'status': 'ATIVO',
    },
    {
        'id': 6,
        'codigo': 'MP1N101001',
        'descricao': 'flake azul',
        'saldo': 500,
        'status': 'ATIVO',
    },
    {
        'id': 7,
        'codigo': 'MP1N101001',
        'descricao': 'FILME STRETCH MAN PL 500 X 0,025 X 3 B 50 T,14',
        'saldo': 500,
        'status': 'ATIVO',
    },
    {
        'id': 8,
        'codigo': 'MP1N101001',
        'descricao': 'flake azul',
        'saldo': 500,
        'status': 'ATIVO',
    },
    {
        'id': 9,
        'codigo': 'MP1N101001',
        'descricao': 'flake azul',
        'saldo': 500,
        'status': 'ATIVO',
    }
]

export default function Table() {
    return (
        <div className={style.container} >
            <table className={style.table} >
                <tr className={style.head}>
                    {listHeadTable.map((item, index) => {
                        return (
                            <th>{item}</th>
                        )
                    })}
                </tr>
                <tbody className={style.body_table}>

                    {listBody.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.codigo}</td>
                                <td>{item.descricao}</td>
                                <td>{item.saldo}</td>
                                <td>{item.status}</td>
                                <td></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}