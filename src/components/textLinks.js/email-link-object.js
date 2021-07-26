import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'

<Flex>
  <Link href={"mailto:" + `${member.fields.email}`}>
    <a>{member.fields.email}</a>
  </Link>
  <Link href={member.fields.linkedIn}>
    <a><FaLinkedin fontSize={30} /></a>
  </Link>
 </Flex>
