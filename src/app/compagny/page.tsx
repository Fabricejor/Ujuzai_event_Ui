"use client";

import React from 'react';
import Image from 'next/image';
import { AvatarGroup } from '@/components/ui/avatar-group';
import { Progress } from '@/components/ui/progress';
import { IconUserSearch, IconMapPin, IconMail, IconPhone, IconBrandLinkedin, IconFileCertificate, IconBrandGoogle, IconBrandShopee, IconVideo, IconSchool, IconShoppingCart } from '@tabler/icons-react';

export default function CompanyPage() {
  return (
    <div className="min-h-screen w-full bg-[#EEEEEE] font-poppins relative pb-10 overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="w-full max-w-7xl mx-auto p-4 flex flex-wrap justify-between items-center gap-4">
        {/* Logo Gauche */}
        <div className="relative w-20 h-10 md:w-24 md:h-12">
          <Image src="/images/GTP OFF  1.png" alt="GTP Logo" fill className="object-contain object-left" />
        </div>
        
        {/* Logo Milieu */}
        <div className="relative w-24 h-12 md:w-32 md:h-16">
           <Image src="/images/LOGO_UJUZAI_HD (1) 1.png" alt="Ujuzai Logo" fill className="object-contain" />
        </div>

        {/* Logo Droite */}
        <div className="relative w-20 h-10 md:w-24 md:h-12">
           <Image src="/images/logoSDJD25_social_networks 1.png" alt="SDJD Logo" fill className="object-contain object-right" />
        </div>
      </header>

      {/* --- SOUS-HEADER (Avatars + Search) --- */}
      <div className="w-full max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
         <div className="shrink-0">
            <AvatarGroup 
                avatars={[
                    { src: "/images/khadija avatar.jpg", label: "Khadija" },
                    { src: "/images/Abdoulaye avatar.jpg", label: "Abdoulaye" },
                    { src: "/images/Pape matar avatar.jpg", label: "Pape Matar" },
                    { src: "/images/Abdoulaye avatar.jpg", label: "William" },
                ]}
                size={40}
                maxVisible={4}
            />
         </div>
         
          {/* Barre de recherche Talent ID */}
          <div className="relative w-full max-w-md flex items-center shadow-md rounded-full bg-white overflow-hidden border border-gray-100">
             <div className="relative w-full flex">
                 <input 
                     type="text" 
                     placeholder="Talent ID" 
                     className="w-full h-12 pl-8 pr-4 bg-white text-gray-600 outline-none placeholder:text-gray-400 text-lg text-center md:text-left"
                 />
                 <button className="w-20 h-12 flex items-center justify-center bg-linear-to-r from-(--secondary-base) to-secondary-light text-white hover:opacity-90 transition-all shrink-0 rounded-l-[30px]">
                     <IconUserSearch size={28} stroke={2} />
                 </button>
             </div>
          </div>
      </div>

      {/* --- CONTENU PRINCIPAL (Grid Split) --- */}
      <main className="w-full max-w-7xl mx-auto px-4 mt-6 flex flex-col-reverse lg:flex-row gap-8 items-stretch">
        
        {/* === SECTION GAUCHE : STATISTIQUES === */}
        <section className="flex-1 w-full lg:max-w-[45%] flex flex-col gap-8">
            
            <div>
                <h2 className="text-2xl font-bold text-black mb-6 uppercase tracking-wide">OPEN ROLES</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {/* Colonne Gauche */}
                    <div className="space-y-8">
                        <StatItem label="Understand the users" value={90} />
                        <StatItem label="Design simple" value={50} />
                        <StatItem label="Test and optimize" value={70} />
                        <StatItem label="Ensure accessibility" value={100} />
                        <StatItem label="Maintain visual" value={60} />
                    </div>

                    {/* Colonne Droite (Dupliquée pour l'exemple comme sur l'image) */}
                    <div className="space-y-8">
                        <StatItem label="Understand the users" value={90} />
                        <StatItem label="Design simple" value={50} />
                        <StatItem label="Test and optimize" value={70} />
                        <StatItem label="Ensure accessibility" value={100} />
                        <StatItem label="Maintain visual" value={60} />
                    </div>
                </div>
            </div>

            {/* Zone Commentaire Améliorée */}
            <div className="mt-8 border-2 border-(--primary-base) rounded-[30px] p-6 bg-white relative">
                <div className="border border-gray-400 rounded-xl p-4 mb-6 h-32 flex items-center justify-center">
                    <textarea 
                        placeholder="TEXT COMMENT" 
                        className="w-full h-full resize-none border-none outline-none text-gray-500 placeholder:text-gray-300 text-center text-lg bg-transparent font-medium uppercase tracking-widest"
                    />
                </div>
                <div className="flex justify-center absolute -bottom-5 left-0 right-0">
                     <button className="px-16 py-3 bg-(--primary-base) text-white font-bold rounded-full uppercase tracking-wider shadow-md hover:brightness-105 transition-all text-sm">
                        Save
                    </button>
                </div>
            </div>

        </section>


        {/* === SEPARATEUR (Visible uniquement sur grand écran) === */}
        <div className="hidden lg:flex flex-col items-center justify-start relative w-[2px] bg-(--primary-base) mx-4">
            <div className="absolute top-0 -left-[3px] bg-(--primary-base) text-white text-sm font-bold py-2 px-6 rounded-r-md uppercase tracking-wider whitespace-nowrap" 
                 style={{ transform: 'translateX(2px)' }}>
                CV TALENT
            </div>
        </div>


        {/* === SECTION DROITE : CV === */}
        <section className="flex-1 w-full">
            
            {/* Carte CV (Image) */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 relative">
                <div className="relative w-full aspect-3/4 min-h-[600px]">
                    <Image 
                        src="/images/Capture d’écran 2025-12-02 à 21.43.45 1.png" 
                        alt="CV Talent" 
                        fill 
                        className="object-contain object-top"
                    />
                </div>
            </div>

            {/* Badges sous le CV */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Badge icon={<IconFileCertificate size={20} />} label="PRODUCT DESIGNER I" />
                <Badge icon={<IconFileCertificate size={20} />} label="CERTIFIED PRO" />
                <Badge icon={<IconFileCertificate size={20} />} label="PRODUCT DESIGNER II" />
            </div>

        </section>
      </main>

      {/* --- FOOTER BANDE DEGRADEE --- */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-linear-to-r from-(--primary-base) to-(--secondary-base)"></div>
    </div>
  )
}

// --- Composants Locaux ---

function StatItem({ label, value }: { label: string, value: number }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
                <span className="font-medium text-gray-700">{label}</span>
                <span className="font-bold text-gray-900">{value}%</span>
            </div>
            <div className="[&_progress]:h-2! [&_progress::-webkit-progress-bar]:bg-white! [&_progress::-webkit-progress-value]:bg-(--primary-base)! [&_progress::-moz-progress-bar]:bg-(--primary-base)!">
                 <Progress 
                    value={value} 
                    // On force la couleur via un style inline sur le wrapper ou en utilisant le hack colors
                    colors={{ 0: "var(--primary-base)" }}
                 />
            </div>
        </div>
    )
}

function Badge({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white border-2 border-indigo-100 rounded-full shadow-sm p-2 text-center gap-1">
            <div className="text-indigo-600">{icon}</div>
            <span className="text-[8px] md:text-[10px] font-bold text-indigo-900 leading-tight">{label}</span>
        </div>
    )
}
