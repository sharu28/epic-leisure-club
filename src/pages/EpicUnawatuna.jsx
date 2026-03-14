import PropertyPage from '../components/PropertyPage';

const BASE = 'https://images.squarespace-cdn.com/content/v1/678b887f4efaf402bd6ced91';

export default function EpicUnawatuna() {
  return (
    <PropertyPage
      name="Epic Unawatuna"
      location="Unawatuna, Galle Coast"
      tagline="A Gateway to Relaxation and Elegance"
      description="Situated 100 metres from the shores of Unawatuna, this beachfront retreat blends modern luxury with the quiet charm of southern Sri Lanka. Galle Fort, local markets, and nature trails await — all from a base that feels like home."
      heroImage={`${BASE}/8fd79577-ee84-4ed6-a3cc-7f7d36021324/Epic+Unawtuna-5.jpg`}
      gallery={[
        { src: `${BASE}/b830d5de-0a7f-44c7-8ee1-919dcca9a0e1/Epic+Unawtuna-5.jpg` },
        { src: `${BASE}/85f14997-d19f-4b50-8617-5362af6c8939/Epic+Unawtuna-1.jpg` },
        { src: `${BASE}/df17cce7-d22d-4b13-87fa-0a1fb5e13496/Epic+Unawtuna-2.jpg` },
        { src: `${BASE}/8b18b126-ab84-48d1-bae5-7ee185b71b59/Epic+Unawtuna-3.jpg` },
        { src: `${BASE}/74cb3818-90e2-4c86-9f56-55ff000e7f50/Epic+Unawtuna-4.jpg` },
        { src: `${BASE}/b86431a9-aa3e-46ed-ba6c-f61ad3937139/Epic+Unawtuna-6.jpg` },
        { src: `${BASE}/12b3a57b-e43a-4b90-9ca9-0267653c616f/Epic+Unawtuna-7.jpg` },
        { src: `${BASE}/4cbe0df1-7328-4be5-ab18-ff3d4f638c7a/Epic+Unawtuna-13.jpg` },
        { src: `${BASE}/ea8b74b8-a05d-4baa-af80-eb17bb2ae301/Epic+Unawtuna-14.jpg` },
        { src: `${BASE}/23e6cc97-1c78-4195-9ddc-575ca27450ea/Epic+Unawtuna-15.jpg` },
        { src: `${BASE}/17bd18bb-a151-4cb8-a220-4d749c0a6729/Epic+Unawtuna-17.jpg` },
        { src: `${BASE}/cea480f5-539f-465d-a812-aceb10d569f1/Epic+Unawtuna-19.jpg` },
        { src: `${BASE}/116762af-a71c-4627-a8f3-54c15e74f2a6/Epic+Unawtuna-21.jpg` },
      ]}
      rooms={[
        {
          name: 'Deluxe King',
          image: `${BASE}/ec8bc6b9-a866-4d6a-bf29-97f2d8bc6c27/Epic+Unawtuna-11.jpg`,
          description: 'Our signature king room is designed for those who appreciate space and calm. The king bed is dressed in premium cotton, positioned to catch the coastal breeze. A dedicated work desk and seating corner make it equally suited for longer stays.',
          amenities: [
            { icon: '🛏️', label: 'King Bed' },
            { icon: '❄️', label: 'Air Conditioning' },
            { icon: '💼', label: 'Work Desk' },
            { icon: '🛋️', label: 'Seating Area' },
            { icon: '🍸', label: 'Mini Bar' },
            { icon: '🍵', label: 'Tea & Coffee' },
            { icon: '📺', label: 'Flat-screen TV' },
            { icon: '🔒', label: 'Safe Box' },
          ],
        },
        {
          name: 'Deluxe Queen',
          image: `${BASE}/fc898d5a-d34f-483b-9031-998d099fc535/330261068.jpg`,
          description: 'A well-appointed room with a queen bed and a thoughtful layout that maximises comfort without sacrificing intimacy. Ideal for couples, with every amenity within easy reach and natural light filtering through quality linens.',
          amenities: [
            { icon: '🛏️', label: 'Queen Bed' },
            { icon: '❄️', label: 'Air Conditioning' },
            { icon: '🚿', label: 'Hot Water' },
            { icon: '📺', label: 'Flat-screen TV' },
            { icon: '🔒', label: 'Safe Box' },
            { icon: '🍵', label: 'Tea & Coffee' },
            { icon: '🧴', label: 'Toiletries' },
            { icon: '💨', label: 'Hair Dryer' },
          ],
        },
        {
          name: 'Deluxe Superior',
          image: `${BASE}/5b0efb38-dd4d-49cf-ae04-a7fe904e98cd/330261100.jpg`,
          description: 'The Superior room offers flexible configuration — king or twin — making it the right choice for travel companions or those who like room to breathe. Extra space, the full amenity package, and the same attentive finish as every room in the property.',
          amenities: [
            { icon: '🛏️', label: 'King or Twin' },
            { icon: '❄️', label: 'Air Conditioning' },
            { icon: '🚿', label: 'Hot Water' },
            { icon: '🍸', label: 'Mini Bar' },
            { icon: '🍵', label: 'Tea & Coffee' },
            { icon: '💨', label: 'Hair Dryer' },
            { icon: '🧴', label: 'Toiletries' },
            { icon: '📶', label: 'Free Wi-Fi' },
          ],
        },
      ]}
    />
  );
}
