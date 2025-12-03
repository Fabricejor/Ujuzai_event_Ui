"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileUpload } from "@/components/ui/file-upload";
import { AvatarGroup } from "@/components/ui/avatar-group";

export default function CandidatePage() {
  const [files, setFiles] = useState<File[]>([]);
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
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
          
          {/* Champ Name */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Mohamed Diouf"
              className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
            />
          </div>

          {/* Ligne Email & Sexe */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="MohamedDiouf@gtp.com"
                className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm md:text-base font-medium text-gray-700">
                Sexe (H/F)
              </label>
              <div className="flex items-center gap-4 h-[46px] md:h-[50px]"> {/* Hauteur ajustée */}
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
          </div>

          {/* Champ Number */}
          <div className="space-y-1">
            <label htmlFor="number" className="block text-sm md:text-base font-medium text-gray-700">
              Number
            </label>
            <input
              type="tel"
              id="number"
              placeholder="+221 77 722 22 22"
              className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
            />
          </div>

          {/* Zone CV (File Upload) */}
          <div className="space-y-1 pt-1 flex-1 min-h-0 flex flex-col">
            <label className="block text-sm md:text-base font-medium text-gray-700 shrink-0">
              CV
            </label>
            <div className="w-full overflow-hidden rounded-xl border border-primary-pale flex-1 min-h-[100px]">
              <FileUpload 
                onChange={handleFileUpload} 
                className="bg-primary-pale h-full min-h-[unset]"
              />
            </div>
          </div>

          {/* Bouton Send */}
          <div className="pt-2 shrink-0">
            <button 
                className="w-full py-3 px-6 rounded-xl bg-(--secondary-base) text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
            >
                SEND
            </button>
          </div>

        </form>
      </div>

      {/* Bande Jaune en bas de page */}
      <div className="fixed bottom-0 left-0 w-full h-6 bg-[#E8B927] z-0"></div>
    </div>
  );
}

