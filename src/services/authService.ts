import axiosInstance from '@/lib/axios';

export interface RegisterTalentResponse {
  id_utilisateur: string;
  email: string;
  nom_prenom: string;
  numero_telephone: string;
  type_utilisateur: string;
  status: string;
  must_change_password: boolean;
  mot_de_passe_temporaire: string;
}

export const registerTalent = async (formData: FormData): Promise<RegisterTalentResponse> => {
  const response = await axiosInstance.post<RegisterTalentResponse>('/auth/register/talent', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

