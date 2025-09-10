const url = "https://git.fahrul.id/koda/data/raw/branch/main/talents.json";

export async function ambilNama() {
  const datas = await fetch(url);
  const users = await datas.json();

  const namaKu = users.map((user) => {
    return user;
  });

  // hasil map itu sudah array makanya langsung akses indeksnya
  let gil = namaKu[6].name;
  let koda = "koda batch 4";

  gil = gil + ", " + koda;
  console.log(gil);
}
