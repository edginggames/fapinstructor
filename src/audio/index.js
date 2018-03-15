import { fetchAudioFile } from "engine/audio";
import tick from "../audio/tick.mp3";
import cum from "../audio/cum.mp3";
import start_stroking_again from "../audio/start_stroking_again.wav";
import denied from "../audio/denied.mp3";
import edge from "../audio/edge.mp3";
import ruined from "../audio/ruined.mp3";
import card from "../audio/card.wav";
import keep_stroking from "../audio/keep_stroking.mp3";
import ruinitforme from "../audio/ruinitforme.mp3";

const audioLibrary = {
  Tick: fetchAudioFile(tick),
  Cum: fetchAudioFile(cum),
  StartStrokingAgain: fetchAudioFile(start_stroking_again),
  Denied: fetchAudioFile(denied),
  Edge: fetchAudioFile(edge),
  Ruined: fetchAudioFile(ruined),
  Card: fetchAudioFile(card),
  KeepStroking: fetchAudioFile(keep_stroking),
  RuinItForMe: fetchAudioFile(ruinitforme)
};

export default audioLibrary;
