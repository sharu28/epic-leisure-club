import PropertyPage from '../components/PropertyPage';

const BASE = 'https://images.squarespace-cdn.com/content/v1/678b887f4efaf402bd6ced91';

export default function AuraByEpic() {
  return (
    <PropertyPage
      name="Aura by Epic"
      location="Mirissa"
      tagline="Your Sanctuary of Serenity in Mirissa"
      description="Within walking distance of Mirissa's pristine beaches, Aura is a calm boutique retreat designed for families and couples who seek true escape. Spacious apartments with kitchenettes, a tranquil pool, and on-site dining — all held within Mirissa's unhurried rhythm."
      heroImage={`${BASE}/af50c09c-355a-42a5-816f-f5ec747b1396/WhatsApp+Image+2025-01-22+at+15.03.27.jpeg`}
      gallery={[
        { src: `${BASE}/e920d05a-6ae0-491a-a96c-ff0272c5f45d/WhatsApp+Image+2025-01-22+at+15.03.27.jpeg` },
        { src: `${BASE}/3d5f667f-b62b-4354-8560-577e3c3e892a/IMG_20250512_171515.jpg` },
        { src: `${BASE}/eb3f926f-f70b-4b09-95c7-c30533800306/IMG_20250122_144709.jpg` },
        { src: `${BASE}/aec81ce5-ba57-46ab-a496-6ab7ee524d26/IMG_20250512_163410.jpg` },
        { src: `${BASE}/cea23e1c-93d9-4c91-a8a1-ce49ca374322/IMG_20250122_143705.jpg` },
        { src: `${BASE}/f35cc474-193e-482a-943e-5965174e8e6f/IMG_20250512_165203.jpg` },
        { src: `${BASE}/a6a088fb-b836-40b3-9a08-be3dc1e32edc/IMG_20250122_144331.jpg` },
        { src: `${BASE}/049dd6a2-717c-4115-bed4-d1ec018cc0dc/IMG_20250512_171232.jpg` },
      ]}
      rooms={[
        {
          name: 'Deluxe Apartment',
          image: `${BASE}/de714a73-24ae-4249-a4ce-a490b0900184/WhatsApp+Image+2025-01-22+at+15.05.49.jpeg`,
          description: 'The apartment is Aura\'s most generous space — designed especially for families or longer stays. An extra-large bed, a fully equipped kitchenette, and a spacious living area make it feel less like a hotel room and more like your own corner of Mirissa.',
          amenities: [
            { icon: '🛏️', label: 'XL Bed' },
            { icon: '🍳', label: 'Kitchenette' },
            { icon: '🛋️', label: 'Living Area' },
            { icon: '❄️', label: 'Air Conditioning' },
            { icon: '🏊', label: 'Pool Access' },
            { icon: '🍽️', label: 'Restaurant' },
            { icon: '📺', label: 'Flat-screen TV' },
            { icon: '🔒', label: 'Safe Box' },
          ],
        },
        {
          name: 'Deluxe Triple',
          image: `${BASE}/2683a8e9-04c0-4ed4-8380-31c84ba4c1b3/WhatsApp+Image+2025-01-22+at+15.03.36+%281%29.jpeg`,
          description: 'Three beds, one well-considered room. The Triple is built for groups travelling together — friends, siblings, or families with older children — without sacrificing the individual comfort that makes a stay memorable. Hot showers, good light, and everything within reach.',
          amenities: [
            { icon: '🛏️', label: 'Three Beds' },
            { icon: '🚿', label: 'Hot Water' },
            { icon: '🍸', label: 'Mini Bar' },
            { icon: '📺', label: 'Flat-screen TV' },
            { icon: '💼', label: 'Work Desk' },
            { icon: '❄️', label: 'Air Conditioning' },
            { icon: '🧴', label: 'Toiletries' },
            { icon: '📶', label: 'Free Wi-Fi' },
          ],
        },
        {
          name: 'Deluxe Double',
          image: `${BASE}/b1c7b351-f023-47d3-9259-ea1c5925b10a/WhatsApp+Image+2025-01-22+at+15.05.42+%282%29.jpeg`,
          description: 'A focused room for two. The Double is Aura\'s most intimate space — a double bed, premium linens, and an air-conditioned interior that feels like a private retreat after a long day on Mirissa\'s beach. All standard amenities included.',
          amenities: [
            { icon: '🛏️', label: 'Double Bed' },
            { icon: '❄️', label: 'Air Conditioning' },
            { icon: '🧴', label: 'Premium Linens' },
            { icon: '🔒', label: 'Safe Box' },
            { icon: '🍵', label: 'Tea & Coffee' },
            { icon: '🚿', label: 'Hot Water' },
            { icon: '💨', label: 'Hair Dryer' },
            { icon: '📶', label: 'Free Wi-Fi' },
          ],
        },
      ]}
    />
  );
}
