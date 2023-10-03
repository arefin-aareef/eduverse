import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const useFavorite = () => {
    const {user} = useContext(AuthContext)

    const { refetch, data: favorite = [] } = useQuery({
        queryKey: ['favorites', user?.email],
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/favorites?email=${user.email}`)
        //     return response.json()
        // },
        queryFn: async () => {
            if (user?.email) {
                const response = await fetch(`http://localhost:5000/favorites?email=${user.email}`);
                return response.json();
            }
            return [];
        },
      })
      return [favorite, refetch]
} 

export default useFavorite;