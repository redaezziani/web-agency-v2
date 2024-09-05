import AvatarCircles from "./AvatarClient";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export async function AvatarCirclesComp() {
  return <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />;
}
