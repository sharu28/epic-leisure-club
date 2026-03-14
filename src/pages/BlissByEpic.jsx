import PropertyPage from '../components/PropertyPage';

const BASE = 'https://images.squarespace-cdn.com/content/v1/678b887f4efaf402bd6ced91';

export default function BlissByEpic() {
  return (
    <PropertyPage
      name="Bliss by Epic"
      location="Unawatuna, Galle Coast"
      tagline="Discover Peace, Embrace Sophistication"
      description="A boutique coastal retreat offering a harmonious blend of comfort and elegance, just steps from the pristine beaches of Unawatuna. Thoughtfully designed spaces, a serene pool, and gourmet cuisine using fresh local ingredients — all in service of your peace."
      heroImage={`${BASE}/fac0bada-2478-43b9-9527-cbe1fc94b431/5A6A9725-HDR.jpg`}
      gallery={[
        { src: `${BASE}/755e89f7-2ea2-4ac6-a2b4-6c0c552a1d5b/5A6A9725-HDR.jpg` },
        { src: `${BASE}/9a8b6162-457d-46a6-b796-65e1efbd0f21/5A6A9742-HDR.jpg` },
        { src: `${BASE}/4a52e798-fd65-41e0-9ef3-45e230f53451/5A6A9704-HDR.jpg` },
        { src: `${BASE}/9d648acc-cee2-48a4-ab09-4d0db72ce62f/5A6A9751-HDR.jpg` },
        { src: `${BASE}/be0a891a-5b2f-4a02-ab16-9aa8e3ed22df/5A6A9668-HDR.jpg` },
        { src: `${BASE}/0ec2b295-0675-4cfb-a5e4-8f2fbc35f8e6/5A6A9617-HDR.jpg` },
        { src: `${BASE}/f91427f9-a7fe-45aa-a515-0a59ca4954d7/5A6A9611-HDR.jpg` },
      ]}
      rooms={[
        {
          name: 'Deluxe King Suite',
          image: `${BASE}/617dc10b-7466-4d00-a3d0-659fbce61cf3/WhatsApp+Image+2025-01-24+at+10.21.33.jpeg`,
          description: 'The suite is the centrepiece of Bliss — an extra-large king bed, a generous separate sitting area, and views that invite you to slow down. Every detail has been considered, from the premium bath amenities to the proximity of the serene pool just outside.',
          amenities: [
            { icon: '🛏️', label: 'XL King Bed' },
            { icon: '🛋️', label: 'Sitting Area' },
            { icon: '🏊', label: 'Pool View' },
            { icon: '🛁', label: 'Premium Bath' },
            { icon: '🍸', label: 'Mini Bar' },
            { icon: '🍵', label: 'Tea & Coffee' },
            { icon: '❄️', label: 'Air Conditioning' },
            { icon: '🔒', label: 'Safe Box' },
          ],
        },
        {
          name: 'Deluxe Queen',
          image: `${BASE}/8f3bdd64-0068-4ab4-bc23-177036b85a53/WhatsApp+Image+2025-01-24+at+10.21.41.jpeg`,
          description: 'Refined and considered. The Queen room is dressed with premium cotton linens, a flat-screen TV, and a compact but well-equipped workspace. Its proportions are generous for a boutique property and the service attentive throughout.',
          amenities: [
            { icon: '🛏️', label: 'Queen Bed' },
            { icon: '❄️', label: 'Air Conditioning' },
            { icon: '📺', label: 'Flat-screen TV' },
            { icon: '🔒', label: 'Safe Box' },
            { icon: '💼', label: 'Work Desk' },
            { icon: '🍵', label: 'Tea & Coffee' },
            { icon: '🧴', label: 'Toiletries' },
            { icon: '💨', label: 'Hair Dryer' },
          ],
        },
        {
          name: 'Deluxe King',
          image: `${BASE}/77f0f4c5-9e31-4f44-998c-9b8b47704c6d/WhatsApp+Image+2025-01-24+at+10.21.35.jpeg`,
          description: 'A focused, elegant room built for rest. The king bed anchors a clean layout with hot water shower, quality linens, and a seating area that makes the space feel lived-in rather than transient — the right choice for those who want comfort without excess.',
          amenities: [
            { icon: '🛏️', label: 'King Bed' },
            { icon: '🚿', label: 'Hot Water' },
            { icon: '🛋️', label: 'Seating Area' },
            { icon: '🧴', label: 'Toiletries' },
            { icon: '💨', label: 'Hair Dryer' },
            { icon: '❄️', label: 'Air Conditioning' },
            { icon: '🍵', label: 'Tea & Coffee' },
            { icon: '📶', label: 'Free Wi-Fi' },
          ],
        },
      ]}
    />
  );
}
