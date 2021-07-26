const circleLogo = logos.map(logo => (
    <Image 
      src={logo.fields.file.url} 
      width={["100px", "300px"]}
      height={["100px", "300px"]}
      sx={{borderRadius: "1000px", objectFit: "contain", backgroundSize: "contain"   }}
      bg={colors.white}
      margin="30px"
    />
  )
)

