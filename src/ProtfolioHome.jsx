import { ImageProtfolio } from "./ImageProtfolio";
import { ProfileButtons } from "./ProfileButtons";
import { ProfileContact } from "./ProfileContact";
import { ProfileIcons } from "./ProfileContactIcons";
import { ProfileDrawer } from "./ProfileDrawer";
import { ProfileExperince } from "./ProfileExperince";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileLanguages } from "./ProfileLanguages";
import { ProfileProjects } from "./ProfileProjects";
import { ProfileSkill } from "./ProfileSkills";
import { ProfileSummary } from "./ProfileSummary";

export function ProtfolioHome(){
    return(
        <div style={{backgroundColor:'#161513',minHeight:'100vh'}}>
            <ProfileDrawer></ProfileDrawer>
            <ImageProtfolio></ImageProtfolio>
            <ProfileHeader></ProfileHeader>
            <ProfileSummary></ProfileSummary>
            <ProfileButtons></ProfileButtons>
            <ProfileSkill></ProfileSkill>
            <ProfileLanguages></ProfileLanguages>
            <ProfileProjects></ProfileProjects>
            <ProfileExperince></ProfileExperince>
            <ProfileContact></ProfileContact>
            <ProfileIcons></ProfileIcons>
        </div>
    )
}