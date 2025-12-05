"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileUpload } from "@/components/ui/file-upload";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { registerTalent } from "@/services/authService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IconX, IconFileText, IconTrash } from "@tabler/icons-react";

export default function CandidatePage() {
  const router = useRouter();
  const [userType, setUserType] = useState<"Talent" | "Company">("Talent");
  const [files, setFiles] = useState<File[]>([]);
  const [gender, setGender] = useState<"Male" | "Female">("Male");

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  
  const [loading, setLoading] = useState(false);
  
  const handleFileUpload = (newFiles: File[]) => {
    // On remplace toujours par le nouveau fichier (le dernier du tableau reçu)
    if (newFiles.length > 0) {
        setFiles([newFiles[newFiles.length - 1]]);
        toast.success("CV téléchargé !", {
            icon: '📄',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
        });
    }
  };

  const removeFile = () => {
      setFiles([]);
      toast("Fichier supprimé", {
          icon: '🗑️',
      });
  };

  const handleSubmit = async () => {
    // Validation basique
    if (!name || !email || !phone) {
        toast.error("Veuillez remplir tous les champs obligatoires.");
        return;
    }

    if (userType === "Talent") {
        if (files.length === 0) {
            toast.error("Veuillez télécharger votre CV.");
            return;
        }

        setLoading(true);
        const loadingToast = toast.loading("Création du compte en cours...");

        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("nom_prenom", name);
            formData.append("numero_telephone", phone);
            // Le backend attend "cv_file" comme clé pour le fichier
            formData.append("cv_file", files[0]); 
            
            const response = await registerTalent(formData);
            console.log("Registration success:", response);
            
            toast.success("Inscription réussie !", { id: loadingToast });
            
            // Petit délai pour laisser voir le toast avant redirection
            setTimeout(() => {
                router.push("/change-password");
            }, 1000);
            
        } catch (error: any) {
            console.error("Erreur lors de l'inscription", error);
            const errorMessage = error.response?.data?.detail || "Une erreur est survenue lors de l'inscription.";
            toast.error(errorMessage, { id: loadingToast });
        } finally {
            setLoading(false);
        }
    } else {
        // Logique Company (Future implementation)
        toast("Inscription Entreprise bientôt disponible !", { icon: '🚧' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#EEEEEE] flex flex-col items-center justify-center px-4 md:px-8 font-poppins relative pb-10">
      
      {/* Carte du Formulaire */}
      <div className="w-full max-w-3xl bg-[#FFFFFF] rounded-3xl shadow-xl p-4 md:p-8 z-10 min-h-[80vh] flex flex-col my-8">
        
        {/* Header avec Logos DANS le formulaire */}
        <div className="flex justify-between items-start mb-4 md:mb-6 shrink-0">
            <div className="relative w-16 h-8 md:w-20 md:h-10">
            <Image
                src="/images/LOGO_UJUZAI_HD (1) 1.png"
                alt="Ujuzai Logo"
                fill
                className="object-contain object-left"
            />
            </div>
            
            {/* Avatar Group au milieu */}
            <div className="flex-1 flex justify-center -mt-2">
                 <AvatarGroup 
                    avatars={[
                        { src: "/images/khadija avatar.jpg", label: "khadija" },
                        { src: "/images/Abdoulaye avatar.jpg", label: "abdoulaye" },
                        { src: "/images/Pape matar avatar.jpg", label: "Pape matar" },
                        { src: "/images/Abdoulaye avatar.jpg", label: "William" },
                    ]}
                    size={35}
                    maxVisible={3}
                 />
            </div>

            <div className="relative w-20 h-10 md:w-24 md:h-12">
            <Image
                src="/images/logoSDJD25_social_networks 1.png"
                alt="SDJD Logo"
                fill
                className="object-contain object-right"
            />
            </div>
        </div>

        <form className="space-y-3 md:space-y-4 flex-1 flex flex-col justify-center" onSubmit={(e) => e.preventDefault()}>
          
          {/* Toggle Talent / Company */}
          <div className="flex justify-center mb-2">
            <div className="relative flex w-full max-w-[300px] h-[46px] md:h-[50px] bg-gray-100 rounded-xl p-1 cursor-pointer border border-gray-200">
                <div 
                    className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm transition-all duration-300 ease-in-out"
                    style={{ 
                        left: userType === "Talent" ? "4px" : "calc(50%)" 
                    }}
                />
                <button
                    type="button"
                    onClick={() => setUserType("Talent")}
                    className={`flex-1 relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-300 rounded-md focus:outline-none ${userType === "Talent" ? "text-gray-900 font-bold" : "text-gray-500"}`}
                >
                    Talent
                </button>
                <button
                    type="button"
                    onClick={() => setUserType("Company")}
                    className={`flex-1 relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-300 rounded-md focus:outline-none ${userType === "Company" ? "text-gray-900 font-bold" : "text-gray-500"}`}
                >
                    Company
                </button>
            </div>
          </div>

          {/* Champ Name */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mohamed Diouf"
              className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
            />
          </div>

          {/* Champ Company Name (Visible uniquement si Company) */}
          {userType === "Company" && (
             <div className="space-y-1">
               <label htmlFor="companyName" className="block text-sm md:text-base font-medium text-gray-700">
                 Company Name
               </label>
               <input
                 type="text"
                 id="companyName"
                 value={companyName}
                 onChange={(e) => setCompanyName(e.target.value)}
                 placeholder="GAINDE 2000"
                 className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
               />
             </div>
          )}

          {/* Ligne Email & Sexe (Grid conditionnelle) */}
          <div className={`grid grid-cols-1 ${userType === "Talent" ? "md:grid-cols-2" : ""} gap-3 md:gap-6`}>
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="MohamedDiouf@gtp.com"
                className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
              />
            </div>

            {userType === "Talent" && (
                <div className="space-y-1">
                <label className="block text-sm md:text-base font-medium text-gray-700">
                    Sexe (H/F)
                </label>
                <div className="flex items-center gap-4 h-[46px] md:h-[50px]">
                    <div className="relative flex w-full h-full bg-white border border-gray-200 rounded-xl p-1 cursor-pointer">
                        <div 
                            className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gray-100 rounded-lg transition-all duration-300 ease-in-out"
                            style={{ 
                                left: gender === "Male" ? "4px" : "calc(50%)" 
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => setGender("Male")}
                            className={`flex-1 relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--primary-base) ${gender === "Male" ? "text-gray-900" : "text-gray-400"}`}
                        >
                            Male
                        </button>
                        <button
                            type="button"
                            onClick={() => setGender("Female")}
                            className={`flex-1 relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--primary-base) ${gender === "Female" ? "text-gray-900" : "text-gray-400"}`}
                        >
                            Female
                        </button>
                    </div>
                </div>
                </div>
            )}
          </div>

          {/* Champ Number */}
          <div className="space-y-1">
            <label htmlFor="number" className="block text-sm md:text-base font-medium text-gray-700">
              Number
            </label>
            <input
              type="tel"
              id="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+221 77 722 22 22"
              className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
            />
          </div>

          {/* Zone CV (Visible uniquement si Talent) */}
          {userType === "Talent" && (
            <div className="space-y-1 pt-1 flex-1 min-h-0 flex flex-col">
                <label className="block text-sm md:text-base font-medium text-gray-700 shrink-0">
                CV
                </label>
                
                {/* Conteneur conditionnel : Soit Upload, Soit File Display */}
                {files.length === 0 ? (
                    <div className="w-full overflow-hidden rounded-xl border border-primary-pale flex-1 min-h-[100px] relative group">
                         <FileUpload 
                            onChange={handleFileUpload} 
                            className="bg-primary-pale h-full min-h-[unset]"
                        />
                    </div>
                ) : (
                    <div className="w-full rounded-xl border border-(--primary-base) bg-white p-3 flex items-center justify-between animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center gap-3 overflow-hidden">
                            <div className="p-2 bg-(--primary-base)/10 rounded-lg text-(--primary-base)">
                                <IconFileText size={24} />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                                    {files[0].name}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {(files[0].size / 1024).toFixed(2)} KB
                                </span>
                            </div>
                        </div>
                        <button 
                            onClick={removeFile}
                            className="p-2 hover:bg-red-50 text-red-500 rounded-full transition-colors"
                            title="Supprimer le fichier"
                        >
                            <IconTrash size={20} />
                        </button>
                    </div>
                )}
            </div>
          )}

          {/* Bouton Send */}
          <div className="pt-2 shrink-0">
            <button 
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3 px-6 rounded-xl bg-(--secondary-base) text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? "SENDING..." : "SEND"}
            </button>
          </div>

        </form>
      </div>

      {/* Bande Jaune en bas de page */}
      <div className="fixed bottom-0 left-0 w-full h-6 bg-[#E8B927] z-0"></div>
    </div>
  );
}
