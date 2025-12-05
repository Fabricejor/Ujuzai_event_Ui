"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Validation dynamique
  const validatePasswords = (newPass: string, confirmPass: string) => {
    if (confirmPass && newPass !== confirmPass) {
        setError("Les mots de passe ne correspondent pas");
        setSuccess("");
    } else if (confirmPass && newPass === confirmPass) {
        setError("");
        setSuccess("Les mots de passe correspondent !");
    } else {
        setError("");
        setSuccess("");
    }
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setNewPassword(val);
    validatePasswords(val, confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setConfirmPassword(val);
    validatePasswords(newPassword, val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    setError("");
    // Logique de changement de mot de passe ici
    console.log({ oldPassword, newPassword });
  };

  return (
    <div className="min-h-screen w-full bg-[#EEEEEE] flex flex-col items-center justify-center px-4 md:px-8 font-poppins relative pb-10">
      
      {/* Carte du Formulaire */}
      <div className="w-full max-w-3xl bg-[#FFFFFF] rounded-3xl shadow-xl p-4 md:p-8 z-10 min-h-[50vh] flex flex-col my-8">
        
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
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Changer le mot de passe || première connexion</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
            
            {/* Ancien mot de passe */}
            <div className="space-y-1 relative">
                <label htmlFor="oldPassword" className="block text-sm md:text-base font-medium text-gray-700">
                Ancien mot de passe
                </label>
                <div className="relative">
                    <input
                        type={showOldPassword ? "text" : "password"}
                        id="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full p-3 pr-10 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        {showOldPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                    </button>
                </div>
            </div>

            {/* Nouveau mot de passe */}
            <div className="space-y-1 relative">
                <label htmlFor="newPassword" className="block text-sm md:text-base font-medium text-gray-700">
                Nouveau mot de passe
                </label>
                <div className="relative">
                    <input
                        type={showNewPassword ? "text" : "password"}
                        id="newPassword"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        placeholder="••••••••"
                        className="w-full p-3 pr-10 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        {showNewPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                    </button>
                </div>
            </div>

            {/* Confirmer le mot de passe */}
            <div className="space-y-1 relative">
                <label htmlFor="confirmPassword" className="block text-sm md:text-base font-medium text-gray-700">
                Confirmer le mot de passe
                </label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder="••••••••"
                        className={`w-full p-3 pr-10 rounded-xl border ${error ? 'border-red-500' : success ? 'border-green-500' : 'border-gray-200'} bg-white text-gray-800 text-sm md:text-base outline-none focus:ring-2 focus:ring-(--primary-base) focus:border-transparent transition-all`}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        {showConfirmPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                    </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-1 px-1">{error}</p>}
                {success && <p className="text-green-600 text-sm mt-1 px-1 font-medium">{success}</p>}
            </div>

            {/* Bouton Submit */}
            <div className="pt-4">
                <button 
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-(--secondary-base) text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                    CONFIRMER
                </button>
            </div>

            </form>
        </div>
        </div>

      {/* Bande Jaune en bas de page */}
        <div className="fixed bottom-0 left-0 w-full h-6 bg-[#E8B927] z-0"></div>
    </div>
  );
}
