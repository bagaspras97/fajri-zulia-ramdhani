import React from 'react'
import AboutSection from '../../components/About'
import EducationSection from '../../components/Education'

type Props = {}

const ProfilePage = (props: Props) => {
  return (
    <>
        <AboutSection />
        <EducationSection />
    </>
  )
}

export default ProfilePage