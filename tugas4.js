var siswa_A=165;
var siswa_B=180;
var siswa_C=170;
console.log("data tinggi siswa :");

console.log("siswa A :",siswa_A,"cm");
console.log("siswa B :",siswa_B,"cm");
console.log("siswa C :",siswa_C,"cm");
function siswatertinggi()
{
  if(siswa_A>siswa_B)
  {
    if(siswa_A>siswa_C)
    {
      console.log("Siswa A adalah siswa tertinggi");
      console.log("urutan siswa dari tinggi ke rendah :");
      console.log("Siswa A :",siswa_A,"cm");
      if(siswa_C>siswa_B)
      {
        console.log("Siswa C :",siswa_C,"cm");
        console.log("Siswa B :",siswa_B,"cm");
      }
      else
      {
        console.log("Siswa B :",siswa_B,"cm");
        console.log("Siswa C :",siswa_C,"cm");
      }
    }
    else
    {
      console.log("Siswa C adalah siswa tertinggi");
      console.log("urutan siswa dari tinggi ke rendah :");
      console.log("Siswa C :",siswa_C,"cm");
      if(siswa_A>siswa_B)
      {
        console.log("Siswa A :",siswa_A,"cm");
        console.log("Siswa B :",siswa_B,"cm");
      }
      else
      {
        console.log("Siswa B :",siswa_B,"cm");
        console.log("Siswa A :",siswa_A,"cm");
      }
    }
  }
  else
  {
    if(siswa_B<siswa_C)
    {
      console.log("Siswa C adalah siswa tertinggi")
      console.log("urutan siswa dari tinggi ke rendah :");
      console.log("Siswa C :",siswa_C,"cm");
      if(siswa_A>siswa_B)
      {
        console.log("Siswa A :",siswa_A,"cm");
        console.log("Siswa B :",siswa_B,"cm");
      }
      else
      {
        console.log("Siswa B :",siswa_B,"cm");
        console.log("Siswa A :",siswa_A,"cm");
      }
    }
    else
    {
      console.log("Siswa B adalah siswa tertinggi")
      console.log("urutan siswa dari tinggi ke rendah :");
      console.log("Siswa B :",siswa_B,"cm");
      if(siswa_C>siswa_A)
      {
        console.log("Siswa C :",siswa_C,"cm");
        console.log("Siswa A :",siswa_A,"cm");
      }
      else
      {
        console.log("Siswa A :",siswa_A,"cm");
        console.log("Siswa C :",siswa_C,"cm");
      }
    }
  }
}
console.log("Kesimpulan :");siswatertinggi();
