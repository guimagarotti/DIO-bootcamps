// Condicionais e Parâmetros
interface IUsuario {
    id: string,
    email: string
}

interface IAdmin extends IUsuario {
    cargo: 'usuario' | 'gerente' | 'regional' | 'assistente'
}

function relacionaArea(usuario: IUsuario) {
    if ('cargo' in usuario) {
        // Área de administração
    } else {
        // Área de usuário
    }    
}

// Variável Opcional
interface IUsuario {
    id: string,
    email: string,
    cargo?: 'usuario' | 'gerente' | 'regional' | 'assistente';
}

function returnArea (usuario: IUsuario) {
    if (usuario.cargo) {
        // returnArea(usuario.cargo);
    }
}


