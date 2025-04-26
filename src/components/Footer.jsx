import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-[#005A8C] text-white py-10">
    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
      
     
      <div class="flex items-start">
        <img src="https://placehold.co/100x100" alt="Little Alley PreSchool Logo" class="w-24 h-24 mr-4" />
        <div class="text-sm space-y-4">
          <div>
            <p class="font-bold">Little Alley PreSchool ( LAP )</p>
            <p>Ruko Terrace 8, Suvarna Bianca Utama No.9 Blok B, Sutera, Sindang Jaya, Tangerang Regency, BANTEN 15560</p>
          </div>
          <div>
            <p class="font-bold">KidsRoom ( KD )</p>
            <p>Ruko Terrace 8, Suvarna Bianca Utama No.9 Blok B, Sutera, Sindang Jaya, Tangerang Regency, BANTEN 15560</p>
          </div>
          <div>
            <p class="font-bold">Little Alley CyberSchool ( LAC )</p>
            <p>Ruko Terrace 8, Suvarna Bianca Utama No.9 Blok B, Sutera, Sindang Jaya, Tangerang Regency, BANTEN 15560</p>
          </div>
        </div>
      </div>
  
     
      <div class="text-sm">
        <p class="mb-4 max-w-sm">
          For inquiries, admissions, partnership opportunities or to learn more about Yayasan Tunas Anak Mulia, please contact us at:
        </p>
        <div class="flex items-start gap-2 mb-2">
          <i class="fas fa-phone-alt mt-1"></i>
          <span>0857162373 / 082314069645</span>
        </div>
        <div class="flex items-start gap-2 mb-2">
          <i class="fas fa-envelope mt-1"></i>
          <span>LittleAlleyPreSchool.com</span>
        </div>
        <div class="flex items-start gap-2 mb-2">
          <i class="fab fa-instagram mt-1"></i>
          <span>@LittleAlleyPreSchool</span>
        </div>
        <div class="flex items-start gap-2">
          <i class="fab fa-twitter mt-1"></i>
          <span>@LittleAlleyCyberSchool</span>
        </div>
      </div>
    </div>
  
   
    <div class="text-center mt-10 text-xs text-white">
      © 2025 <span class="font-bold">Yayasan Tunas Anak Mulia.</span> All Right Reserved
    </div>
  </footer>
  
  )
}
