import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import EastIcon from "@mui/icons-material/East";
import ListIcon from "@mui/icons-material/List";

const MainDisplayTopLeftContainer = styled.div`
  flex: 2;
  height: 85vh;
  margin: 8px 7px;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const MainDisplayTopLeftTop = styled.div`
  height: 13vh;
  background-color: blue;
  background-color: #222222;
  margin-bottom: 10px;
  padding: 20px 5px;
`;
const MainDisplayTopLeftHomeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;
const MainDisplayTopLeftSearchItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;
const MainDisplayTopLeftHomeText = styled.h1`
  margin: 0px;
  color: white;
  font-size: 24px;
  padding-top: 7px;
`;
const MainDisplayTopLeftSearchText = styled.h1`
  margin: 0px;
  font-size: 24px;
  color: ${(props) => (props.issearchhovered === "true" ? "white" : "#555555")};
`;
const MainDisplayTopLeftBottom = styled.div`
  height: 65vh;
  background-color: #222222;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: gray #f1f1f1;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 5px;
  }
`;
const MainDisplayTopLeftBottomWrapper = styled.div`
  padding: 15px;
`;
const BottomFirst = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BottomFirstLeft = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const BottomFirstRight = styled.div``;
const BottomFirstText = styled.h3`
  margin: 0px;
  color: ${(props) => (props.ishovered === "true" ? "white" : "#555555")};
`;
const BottomSecond = styled.div`
  display: flex;
  margin-top: 8px;
`;
const BottomSecondPlaylistButton = styled.button`
  background-color: #444444;
  border: none;
  padding: 8px 10px;
  border-radius: 15px;
  color: white;
  font-size: 16px;
  margin-right: 15px;
  &:hover {
    background-color: #666666;
  }
`;
const BottomSecondArtistButton = styled.button`
  background-color: #444444;
  border: none;
  padding: 8px 10px;
  border-radius: 15px;
  color: white;
  font-size: 16px;
  margin-right: 15px;
  &:hover {
    background-color: #666666;
  }
`;
const BottomThird = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  position: relative;
  height: 35px;
`;
const BottomThridSearchInputContainer = styled.div`
  flex: 2;
`;
const BottomThirdSearchInput = styled.input`
  height: 32px;
  border: none;
  padding: 0px 40px;
  font-size: 18px;
  width: 150px;
  border-radius: 7px;
  background-color: #333333;
  color: #666666;
  display: ${(props) =>
    props.searchiconvisible === "false" ? "block" : "none"};
  &:focus {
    outline: none;
  }
`;
const BottomThirdRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BottomThirdRightText = styled.h3`
  font-size: 18px;
  cursor: pointer;
  margin-right: 0px;
  color: ${(props) =>
    props.isrecentsearchhovered === "true" ? "white" : "#555555"};
`;
const BottomFourth = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px 5px 10px;
  margin-top: 15px;
`;
const BottomFourthEachItem = styled.div`
  display: flex;
  padding: 4px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #333333;
  }
`;
const ImageContainer = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
`;
const BottomFourthRight = styled.div`
  diplay: flex;
  flex-direction: column;
  padding: 5px 0px;
`;
const BottomFourthRightArtistName = styled.h3`
  margin: 0;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;
const BottomFourthRightDescription = styled.p`
  margin: 0;
  color: white;
  font-size: 15px;
  font-weight: 300;
`;

const MainDisplayTopLeft = () => {
  console.log("Main display top left");
  const [ishovered, setIsHovered] = useState(false);
  const [issearchhovered, setIsSearchHovered] = useState(false);
  const [isrecentsearchhovered, setIsRecentSearchHovered] = useState(false);
  const [searchiconvisible, setSearchIconVisible] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleSearchMouseEnter = () => {
    setIsSearchHovered(true);
  };
  const handleSearchMouseLeave = () => {
    setIsSearchHovered(false);
  };
  const handleRecentSerachMouseEnter = () => {
    setIsRecentSearchHovered(true);
  };
  const handleRecentSerachMouseLeave = () => {
    setIsRecentSearchHovered(false);
  };
  const handleSearchIconClick = () => {
    setSearchIconVisible(!searchiconvisible);
  };
  return (
    <MainDisplayTopLeftContainer>
      <MainDisplayTopLeftTop>
        <MainDisplayTopLeftHomeItem>
          <HomeIcon
            style={{ fontSize: "40px", marginRight: "15px", color: "white" }}
          />
          <MainDisplayTopLeftHomeText>Home</MainDisplayTopLeftHomeText>
        </MainDisplayTopLeftHomeItem>
        <MainDisplayTopLeftSearchItem
          onMouseEnter={handleSearchMouseEnter}
          onMouseLeave={handleSearchMouseLeave}
        >
          <SearchIcon
            style={{
              fontSize: "40px",
              marginRight: "15px",
              color: issearchhovered ? "white" : "#555555",
              transition: "color 0.3s",
            }}
          />
          <MainDisplayTopLeftSearchText
            issearchhovered={issearchhovered ? "true" : "false"}
          >
            Search
          </MainDisplayTopLeftSearchText>
        </MainDisplayTopLeftSearchItem>
      </MainDisplayTopLeftTop>
      <MainDisplayTopLeftBottom>
        <MainDisplayTopLeftBottomWrapper>
          <BottomFirst>
            <BottomFirstLeft
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <LibraryMusicIcon
                style={{
                  fontSize: "40px",
                  marginRight: "15px",
                  color: ishovered ? "white" : "#555555",
                  transition: "color 0.3s",
                }}
              />
              <BottomFirstText ishovered={ishovered ? "true" : "false"}>
                Your Library
              </BottomFirstText>
            </BottomFirstLeft>
            <BottomFirstRight>
              <AddIcon
                style={{
                  fontSize: "40px",
                  marginRight: "15px",
                  color: "#555555",
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#555555")}
              />
              <EastIcon
                style={{
                  fontSize: "40px",
                  marginRight: "15px",
                  color: "#555555",
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#555555")}
              />
            </BottomFirstRight>
          </BottomFirst>
          <BottomSecond>
            <BottomSecondPlaylistButton>Playlists</BottomSecondPlaylistButton>
            <BottomSecondArtistButton>Artists</BottomSecondArtistButton>
          </BottomSecond>
          <BottomThird>
            <BottomThridSearchInputContainer>
              <SearchIcon
                style={{
                  position: "absolute",
                  top: "2",
                  left: "4",
                  fontSize: "32px",
                  color: "#555555",
                }}
                onClick={handleSearchIconClick}
              />
              <BottomThirdSearchInput
                searchiconvisible={searchiconvisible ? "true " : "false"}
                placeholder="Search your list"
              />
            </BottomThridSearchInputContainer>
            <BottomThirdRight
              onMouseEnter={handleRecentSerachMouseEnter}
              onMouseLeave={handleRecentSerachMouseLeave}
            >
              <BottomThirdRightText
                isrecentsearchhovered={isrecentsearchhovered ? "true" : "false"}
              >
                Recents
              </BottomThirdRightText>
              <ListIcon
                style={{
                  fontSize: "30px",
                  color: isrecentsearchhovered ? "white" : "#555555",
                  transition: "color 0.3s",
                }}
              />
            </BottomThirdRight>
          </BottomThird>
          <BottomFourth>
            <BottomFourthEachItem>
              <ImageContainer
                src={`${PF}tilahun.jpg`}
                alt="Image not available"
              />
              <BottomFourthRight>
                <BottomFourthRightArtistName>
                  Tilahun Gessese
                </BottomFourthRightArtistName>
                <BottomFourthRightDescription>
                  Volume-1
                </BottomFourthRightDescription>
              </BottomFourthRight>
            </BottomFourthEachItem>
            <BottomFourthEachItem>
              <ImageContainer
                src={`${PF}aster.jpg`}
                alt="Image not available"
              />
              <BottomFourthRight>
                <BottomFourthRightArtistName>
                  Aster Aweke
                </BottomFourthRightArtistName>
                <BottomFourthRightDescription>
                  Volume-2
                </BottomFourthRightDescription>
              </BottomFourthRight>
            </BottomFourthEachItem>
            <BottomFourthEachItem>
              <ImageContainer
                src={`${PF}rophnan.jpeg`}
                alt="Image not available"
              />
              <BottomFourthRight>
                <BottomFourthRightArtistName>
                  Rophnan
                </BottomFourthRightArtistName>
                <BottomFourthRightDescription>
                  Volume-2
                </BottomFourthRightDescription>
              </BottomFourthRight>
            </BottomFourthEachItem>
            <BottomFourthEachItem>
              <ImageContainer
                src={`${PF}neway.jpg`}
                alt="Image not available"
              />
              <BottomFourthRight>
                <BottomFourthRightArtistName>
                  Neway Debebe
                </BottomFourthRightArtistName>
                <BottomFourthRightDescription>
                  Volume-4
                </BottomFourthRightDescription>
              </BottomFourthRight>
            </BottomFourthEachItem>
            <BottomFourthEachItem>
              <ImageContainer
                src={`${PF}tilahun.jpg`}
                alt="Image not available"
              />
              <BottomFourthRight>
                <BottomFourthRightArtistName>
                  Tilahun Gessese
                </BottomFourthRightArtistName>
                <BottomFourthRightDescription>
                  Volume-1
                </BottomFourthRightDescription>
              </BottomFourthRight>
            </BottomFourthEachItem>
            <BottomFourthEachItem>
              <ImageContainer
                src={`${PF}tilahun.jpg`}
                alt="Image not available"
              />
              <BottomFourthRight>
                <BottomFourthRightArtistName>
                  Tilahun Gessese
                </BottomFourthRightArtistName>
                <BottomFourthRightDescription>
                  Volume-1
                </BottomFourthRightDescription>
              </BottomFourthRight>
            </BottomFourthEachItem>
            <BottomFourthEachItem>
              <ImageContainer
                src={`${PF}tilahun.jpg`}
                alt="Image not available"
              />
              <BottomFourthRight>
                <BottomFourthRightArtistName>
                  Tilahun Gessese
                </BottomFourthRightArtistName>
                <BottomFourthRightDescription>
                  Volume-1
                </BottomFourthRightDescription>
              </BottomFourthRight>
            </BottomFourthEachItem>
            <BottomFourthEachItem>
              <ImageContainer
                src={`${PF}tilahun.jpg`}
                alt="Image not available"
              />
              <BottomFourthRight>
                <BottomFourthRightArtistName>
                  Tilahun Gessese
                </BottomFourthRightArtistName>
                <BottomFourthRightDescription>
                  Volume-1
                </BottomFourthRightDescription>
              </BottomFourthRight>
            </BottomFourthEachItem>
            <BottomFourthEachItem>
              <ImageContainer
                src={`${PF}tilahun.jpg`}
                alt="Image not available"
              />
              <BottomFourthRight>
                <BottomFourthRightArtistName>
                  Tilahun Gessese
                </BottomFourthRightArtistName>
                <BottomFourthRightDescription>
                  Volume-1
                </BottomFourthRightDescription>
              </BottomFourthRight>
            </BottomFourthEachItem>
            <BottomFourthEachItem>
              <ImageContainer
                src={`${PF}tilahun.jpg`}
                alt="Image not available"
              />
              <BottomFourthRight>
                <BottomFourthRightArtistName>
                  Tilahun Gessese
                </BottomFourthRightArtistName>
                <BottomFourthRightDescription>
                  Volume-1
                </BottomFourthRightDescription>
              </BottomFourthRight>
            </BottomFourthEachItem>
          </BottomFourth>
        </MainDisplayTopLeftBottomWrapper>
      </MainDisplayTopLeftBottom>
    </MainDisplayTopLeftContainer>
  );
};

export default MainDisplayTopLeft;
