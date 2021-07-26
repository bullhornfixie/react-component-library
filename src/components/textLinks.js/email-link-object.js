import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'

<MemberText mt={spacing.sm} fontSize={sizes.sm}>
  {member.fields.title}
</MemberText>
<MemberText mt={spacing.sm} fontSize={sizes.sm}>
  <Link href={"mailto:" + `${member.fields.email}`}>
    <a>{member.fields.email}</a>
  </Link>
</MemberText>
<MemberText mt={spacing.sm} fontSize={sizes.sm}>
  <Link href={member.fields.linkedIn}>
    <a><FaLinkedin fontSize={30} /></a>
  </Link>
</MemberText>
