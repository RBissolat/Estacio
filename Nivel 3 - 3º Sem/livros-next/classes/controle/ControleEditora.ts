import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
    {
        codEditora: 1,
        nomeEditora: 'Rocco',
    },
    {
        codEditora: 2,
        nomeEditora: 'WMF Martins Fontes',
    },
    {
        codEditora: 3,
        nomeEditora: 'Hunter Books',
    }
];

export default class ControleEditora {
    public getNomeEditora(codEditora: number) {
        const editora = editoras.filter
        (editora => editora.codEditora === codEditora);
        return editora[0].nomeEditora;
    }

    public getEditoras() {
        return editoras;
    }
    
}

