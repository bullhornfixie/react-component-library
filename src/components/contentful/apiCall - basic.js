import { contentfulClient } from '@services/contentful'

//     const [loaded, setLoaded] = useState(false)
//     const [content, setContent] = useState([])

//   const fetchData = async () => {
//     const entriesObj = {
//       content_type: 'risk',
//       'sys.id': '4OGzRpb3Shy935zKq4lYMY',
//       include: 1,
//     }
  
//     const response = await contentfulClient.getEntries(entriesObj)
//     if (response) {
//       setLoaded(true)
//       setContent(response.items[0].fields)
//     }
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])



