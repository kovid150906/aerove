# Alumni Page Design Plan

## File Structure
```
src/
  Alumni.jsx (main page)
  data/
    alumniData.jsx
  components/
    AlumniTimeline.jsx
    AlumniCard.jsx
  styles/
    alumniStyles.css
public/
  photos/alumni/
    [alumni photos]
```

## Key Differences from Team Page
1. Timeline layout (vertical) instead of grid
2. Organized by graduation year
3. Additional fields: current position, company
4. Different card styling with graduation year badge

## Components
1. `AlumniTimeline` - Vertical timeline container
2. `AlumniCard` - Individual alumni profile card
   - Photo
   - Name
   - Graduation year (badge)
   - Role at Aerove
   - Current position
   - Social links

## Data Structure (alumniData.jsx)
```jsx
{
  title: "Our Alumni Network",
  subtitle: "Where our former members are now",
  years: [
    {
      year: "2024",
      members: [
        {
          id: 1,
          name: "Alumni Name",
          avatar: "photos/alumni/name.jpg",
          role: "Former Role",
          batch: "2024",
          currentPosition: "Current Position @ Company",
          social: { linkedin: "#", instagram: "#" }
        }
      ]
    }
  ]
}
```

## Next Steps
1. Switch to code mode to implement
2. Create all necessary files
3. Add dummy data
4. Test styling