import { createSlice, configureStore } from '@reduxjs/toolkit';
const states = createSlice({
  name: 'states',
  initialState: {
    graf: [
      {
        "city_name": "Bangil",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Gempol",
            "distance": 15.5
          },
          {
            "is_active": true,
            "city_name": "Pasuruan",
            "distance": 17.1
          },
          {
            "is_active": true,
            "city_name": "Sidoarjo",
            "distance": 27.2
          },
          {
            "is_active": true,
            "city_name": "Mojokerto",
            "distance": 48
          }
        ]
      },
      {
        "city_name": "Banyuwangi",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Jember",
            "distance": 104
          },
          {
            "is_active": true,
            "city_name": "Situbondo",
            "distance": 96.1
          }
        ]
      },
      {
        "city_name": "Batu",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Kediri",
            "distance": 86.1
          },
          {
            "is_active": true,
            "city_name": "Blitar",
            "distance": 74.2
          },
          {
            "is_active": true,
            "city_name": "Jombang",
            "distance": 75.2
          },
          {
            "is_active": true,
            "city_name": "Mojokerto",
            "distance": 60.7
          },
          {
            "is_active": true,
            "city_name": "Lawang",
            "distance": 27.7
          },
          {
            "is_active": true,
            "city_name": "Malang",
            "distance": 18.7
          }
        ]
      },
      {
        "city_name": "Besuki",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Situbondo",
            "distance": 39.5
          },
          {
            "is_active": true,
            "city_name": "Bondowoso",
            "distance": 35.9
          },
          {
            "is_active": true,
            "city_name": "Probolinggo",
            "distance": 61.1
          }
        ]
      },
      {
        "city_name": "Blitar",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Kepanjen",
            "distance": 58.7
          },
          {
            "is_active": true,
            "city_name": "Batu",
            "distance": 74.7
          },
          {
            "is_active": true,
            "city_name": "Tulungagung",
            "distance": 29.2
          },
          {
            "is_active": true,
            "city_name": "Kediri",
            "distance": 40.6
          }
        ]
      },
      {
        "city_name": "Bojonegoro",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Tuban",
            "distance": 44
          },
          {
            "is_active": true,
            "city_name": "Lamongan",
            "distance": 65.9
          },
          {
            "is_active": true,
            "city_name": "Nganjuk",
            "distance": 63.8
          },
          {
            "is_active": true,
            "city_name": "Jombang",
            "distance": 96.8
          },
          {
            "is_active": true,
            "city_name": "Ngawi",
            "distance": 74.9
          },
          {
            "is_active": true,
            "city_name": "Mojokerto",
            "distance": 91.8
          }
        ]
      },
      {
        "city_name": "Bondowoso",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Jember",
            "distance": 34.8
          },
          {
            "is_active": true,
            "city_name": "Situbondo",
            "distance": 34.7
          },
          {
            "is_active": true,
            "city_name": "Besuki",
            "distance": 35.2
          }
        ]
      },
      {
        "city_name": "Dampit Kab Malang",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Malang",
            "distance": 38.6
          },
          {
            "is_active": true,
            "city_name": "Tumpang",
            "distance": 32.3
          },
          {
            "is_active": true,
            "city_name": "Kepanjen",
            "distance": 26.4
          },
          {
            "is_active": true,
            "city_name": "Lumajang",
            "distance": 80.5
          }
        ]
      },
      {
        "city_name": "Gempol",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Lawang",
            "distance": 31.4
          },
          {
            "is_active": true,
            "city_name": "Sidoarjo",
            "distance": 18.5
          },
          {
            "is_active": true,
            "city_name": "Bangil",
            "distance": 13.6
          },
          {
            "is_active": true,
            "city_name": "Mojokerto",
            "distance": 30.6
          }
        ]
      },
      {
        "city_name": "Gresik",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Surabaya",
            "distance": 28.3
          },
          {
            "is_active": true,
            "city_name": "Lamongan",
            "distance": 20.7
          },
          {
            "is_active": true,
            "city_name": "Mojokerto",
            "distance": 46.7
          },
          {
            "is_active": true,
            "city_name": "Tuban",
            "distance": 76.4
          }
        ]
      },
      {
        "city_name": "Jember",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Klakah",
            "distance": 69.3
          },
          {
            "is_active": true,
            "city_name": "Lumajang",
            "distance": 64.5
          },
          {
            "is_active": true,
            "city_name": "Bondowoso",
            "distance": 33.9
          },
          {
            "is_active": true,
            "city_name": "Banyuwangi",
            "distance": 103
          }
        ]
      },
      {
        "city_name": "Jombang",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Mojokerto",
            "distance": 30.2
          },
          {
            "is_active": true,
            "city_name": "Batu",
            "distance": 74
          },
          {
            "is_active": true,
            "city_name": "Lamongan",
            "distance": 69
          },
          {
            "is_active": true,
            "city_name": "Bojonegoro",
            "distance": 95
          },
          {
            "is_active": true,
            "city_name": "Tuban",
            "distance": 94.2
          },
          {
            "is_active": true,
            "city_name": "Nganjuk",
            "distance": 50.3
          },
          {
            "is_active": true,
            "city_name": "Kediri",
            "distance": 54.2
          }
        ]
      },
      {
        "city_name": "Kediri",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Tulungagung",
            "distance": 34.3
          },
          {
            "is_active": true,
            "city_name": "Blitar",
            "distance": 40.8
          },
          {
            "is_active": true,
            "city_name": "Nganjuk",
            "distance": 36.9
          },
          {
            "is_active": true,
            "city_name": "Batu",
            "distance": 87
          },
          {
            "is_active": true,
            "city_name": "Jombang",
            "distance": 54.5
          }
        ]
      },
      {
        "city_name": "Kepanjen",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Malang",
            "distance": 20.5
          },
          {
            "is_active": true,
            "city_name": "Dampit Kab Malang",
            "distance": 26.5
          },
          {
            "is_active": true,
            "city_name": "Blitar",
            "distance": 58.2
          }
        ]
      },
      {
        "city_name": "Klakah",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Probolinggo",
            "distance": 28.7
          },
          {
            "is_active": true,
            "city_name": "Lumajang",
            "distance": 18.3
          },
          {
            "is_active": true,
            "city_name": "Jember",
            "distance": 67.4
          }
        ]
      },
      {
        "city_name": "Lamongan",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Gresik",
            "distance": 29.5
          },
          {
            "is_active": true,
            "city_name": "Mojokerto",
            "distance": 51
          },
          {
            "is_active": true,
            "city_name": "Tuban",
            "distance": 57.3
          },
          {
            "is_active": true,
            "city_name": "Jombang",
            "distance": 69
          },
          {
            "is_active": true,
            "city_name": "Bojonegoro",
            "distance": 65.9
          }
        ]
      },
      {
        "city_name": "Lawang",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Malang",
            "distance": 19.5
          },
          {
            "is_active": true,
            "city_name": "Tumpang",
            "distance": 30.6
          },
          {
            "is_active": true,
            "city_name": "Batu",
            "distance": 28.4
          },
          {
            "is_active": true,
            "city_name": "Pasuruan",
            "distance": 33.2
          },
          {
            "is_active": true,
            "city_name": "Gempol",
            "distance": 31
          }
        ]
      },
      {
        "city_name": "Lumajang",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Klakah",
            "distance": 17.3
          },
          {
            "is_active": true,
            "city_name": "Jember",
            "distance": 66.7
          },
          {
            "is_active": true,
            "city_name": "Dampit Kab Malang",
            "distance": 80.5
          }
        ]
      },
      {
        "city_name": "Madiun",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Ngawi",
            "distance": 33
          },
          {
            "is_active": true,
            "city_name": "Magetan",
            "distance": 23
          },
          {
            "is_active": true,
            "city_name": "Nganjuk",
            "distance": 48.1
          },
          {
            "is_active": true,
            "city_name": "Ponorogo",
            "distance": 28.9
          }
        ]
      },
      {
        "city_name": "Magetan",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Ngawi",
            "distance": 32.2
          },
          {
            "is_active": true,
            "city_name": "Madiun",
            "distance": 22.6
          },
          {
            "is_active": true,
            "city_name": "Ponorogo",
            "distance": 34.6
          }
        ]
      },
      {
        "city_name": "Malang",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Batu",
            "distance": 17.3
          },
          {
            "is_active": true,
            "city_name": "Kepanjen",
            "distance": 20.8
          },
          {
            "is_active": true,
            "city_name": "Tumpang",
            "distance": 17.4
          },
          {
            "is_active": true,
            "city_name": "Lawang",
            "distance": 17.2
          },
          {
            "is_active": true,
            "city_name": "Dampit Kab Malang",
            "distance": 38.8
          }
        ]
      },
      {
        "city_name": "Mojokerto",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Surabaya",
            "distance": 47.8
          },
          {
            "is_active": true,
            "city_name": "Sidoarjo",
            "distance": 36.2
          },
          {
            "is_active": true,
            "city_name": "Gempol",
            "distance": 33.7
          },
          {
            "is_active": true,
            "city_name": "Jombang",
            "distance": 29.2
          },
          {
            "is_active": true,
            "city_name": "Batu",
            "distance": 57.2
          },
          {
            "is_active": true,
            "city_name": "Lamongan",
            "distance": 49.2
          },
          {
            "is_active": true,
            "city_name": "Gresik",
            "distance": 51
          },
          {
            "is_active": true,
            "city_name": "Bojonegoro",
            "distance": 89.3
          },
          {
            "is_active": true,
            "city_name": "Bangil",
            "distance": 48
          },
          {
            "is_active": true,
            "city_name": "Tuban",
            "distance": 97.7
          }
        ]
      },
      {
        "city_name": "Nganjuk",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Bojonegoro",
            "distance": 63.9
          },
          {
            "is_active": true,
            "city_name": "Jombang",
            "distance": 46.2
          },
          {
            "is_active": true,
            "city_name": "Ngawi",
            "distance": 61.5
          },
          {
            "is_active": true,
            "city_name": "Kediri",
            "distance": 36.3
          },
          {
            "is_active": true,
            "city_name": "Madiun",
            "distance": 48.1
          }
        ]
      },
      {
        "city_name": "Ngawi",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Madiun",
            "distance": 36.4
          },
          {
            "is_active": true,
            "city_name": "Nganjuk",
            "distance": 82
          },
          {
            "is_active": true,
            "city_name": "Bojonegoro",
            "distance": 90
          },
          {
            "is_active": true,
            "city_name": "Magetan",
            "distance": 32.6
          }
        ]
      },
      {
        "city_name": "Pacitan",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Ponorogo",
            "distance": 110
          },
          {
            "is_active": true,
            "city_name": "Prigi",
            "distance": 122
          }
        ]
      },
      {
        "city_name": "Pasuruan",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Bangil",
            "distance": 16.6
          },
          {
            "is_active": true,
            "city_name": "Probolinggo",
            "distance": 46
          },
          {
            "is_active": true,
            "city_name": "Lawang",
            "distance": 34.5
          }
        ]
      },
      {
        "city_name": "Ponorogo",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Magetan",
            "distance": 33
          },
          {
            "is_active": true,
            "city_name": "Madiun",
            "distance": 29.7
          },
          {
            "is_active": true,
            "city_name": "Pacitan",
            "distance": 69.3
          },
          {
            "is_active": true,
            "city_name": "Trenggalek",
            "distance": 50.8
          }
        ]
      },
      {
        "city_name": "Prigi",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Trenggalek",
            "distance": 34
          },
          {
            "is_active": true,
            "city_name": "Pacitan",
            "distance": 125
          }
        ]
      },
      {
        "city_name": "Probolinggo",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Pasuruan",
            "distance": 45.1
          },
          {
            "is_active": true,
            "city_name": "Besuki",
            "distance": 62.1
          },
          {
            "is_active": true,
            "city_name": "Klakah",
            "distance": 28.7
          }
        ]
      },
      {
        "city_name": "Sidoarjo",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Bangil",
            "distance": 20.1
          },
          {
            "is_active": true,
            "city_name": "Gempol",
            "distance": 19.4
          },
          {
            "is_active": true,
            "city_name": "Mojokerto",
            "distance": 38.6
          },
          {
            "is_active": true,
            "city_name": "Surabaya",
            "distance": 24.3
          }
        ]
      },
      {
        "city_name": "Situbondo",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Besuki",
            "distance": 38.8
          },
          {
            "is_active": true,
            "city_name": "Bondowoso",
            "distance": 35.6
          },
          {
            "is_active": true,
            "city_name": "Banyuwangi",
            "distance": 95
          }
        ]
      },
      {
        "city_name": "Surabaya",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Sidoarjo",
            "distance": 25.1
          },
          {
            "is_active": true,
            "city_name": "Mojokerto",
            "distance": 47.8
          },
          {
            "is_active": true,
            "city_name": "Gresik",
            "distance": 21.2
          }
        ]
      },
      {
        "city_name": "Trenggalek",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Ponorogo",
            "distance": 52.4
          },
          {
            "is_active": true,
            "city_name": "Tulungagung",
            "distance": 36
          },
          {
            "is_active": true,
            "city_name": "Prigi",
            "distance": 34
          }
        ]
      },
      {
        "city_name": "Tuban",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Gresik",
            "distance": 86.6
          },
          {
            "is_active": true,
            "city_name": "Lamongan",
            "distance": 58.5
          },
          {
            "is_active": true,
            "city_name": "Jombang",
            "distance": 96
          },
          {
            "is_active": true,
            "city_name": "Bojonegoro",
            "distance": 43.6
          },
          {
            "is_active": true,
            "city_name": "Mojokerto",
            "distance": 97.7
          }
        ]
      },
      {
        "city_name": "Tulungagung",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Trenggalek",
            "distance": 36.1
          },
          {
            "is_active": true,
            "city_name": "Blitar",
            "distance": 29.2
          },
          {
            "is_active": true,
            "city_name": "Kediri",
            "distance": 34.1
          }
        ]
      },
      {
        "city_name": "Tumpang",
        "neighbor_cities": [
          {
            "is_active": true,
            "city_name": "Malang",
            "distance": 17.9
          },
          {
            "is_active": true,
            "city_name": "Dampit Kab Malang",
            "distance": 31.6
          },
          {
            "is_active": true,
            "city_name": "Lawang",
            "distance": 28.9
          }
        ]
      }
    ],
    
  },
  reducers: {
    
  }
})

export const actions = states.actions;
const store = configureStore({
  reducer : states.reducer
})

export default store;