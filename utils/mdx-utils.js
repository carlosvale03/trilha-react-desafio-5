import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts');

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
  try{
    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const { data, error } = await api.get(`/posts?id=eq.${id}`);

    // Verificando se houve um erro na requisição
    if (error) {
      console.error('Erro ao buscar o post:', error);
      return null;
    }

    // Retornando o primeiro resultado, caso o post seja encontrado
    if (data && data.length > 0) {
      return data[0]; // Retorna o post específico
    } else {
      return null; // Retorna null se não houver post com o ID fornecido
    }
  } catch (error) {
    console.error('Erro na requisição à API:', error);
    return null;
  }
}