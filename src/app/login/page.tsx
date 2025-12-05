"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Logique de connexion ici
  };

  return (
    <div className="min-h-screen w-full bg-[#EEEEEE] flex flex-col items-center justify-center px-4 md:px-8 font-poppins relative pb-10">
      
      {/* Carte du Formulaire */}
      <div className="w-full max-w-3xl bg-[#FFFFFF] rounded-3xl shadow-xl p-4 md:p-8 z-10 min-h-[60vh] flex flex-col my-8">
        
        {/* Header avec Logos */}
        <div className="flex justify-between items-start mb-8 md:mb-10 shrink-0">
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

        <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Connexion</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Champ Email */}
            <div className="space-y-1">
                <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700">
                Email
                </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
                required
                />
            </div>

            {/* Champ Mot de passe */}
            <div className="space-y-1 relative">
                <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm md:text-base font-medium text-gray-700">
                    Mot de passe
                    </label>
                </div>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full p-3 pr-10 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                    </button>
                </div>
                {/* Lien Mot de passe oublié (optionnel mais classique) */}
                <div className="text-right pt-1">
                    <Link href="#" className="text-xs md:text-sm text-gray-500 hover:text-(--primary-base) transition-colors">
                        Mot de passe oublié ?
                    </Link>
                </div>
            </div>

            {/* Bouton Login */}
            <div className="pt-6">
                <button 
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-(--secondary-base) text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                    LOGIN
                </button>
            </div>

            {/* Lien vers inscription (optionnel) */}
            <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                    Pas encore de compte ?{" "}
                    <Link href="/register" className="font-bold text-(--secondary-base) hover:underline">
                        S&apos;inscrire
                    </Link>
                </p>
            </div>

            </form>
        </div>
      </div>

      {/* Bande Jaune en bas de page */}
      <div className="fixed bottom-0 left-0 w-full h-6 bg-[#E8B927] z-0"></div>
    </div>
  );
}

