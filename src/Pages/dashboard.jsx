import React from "react";
import '../Pages-Style/dashboard.css';
import vector from '../Pics/vector.png';
import redVector from '../Pics/red-vector.png';
import redPic2 from '../Pics/red-pic2.png';
import pic2 from '../Pics/g1-p1-pic2.png';
import ChapterStatus from '../Pics/Chapter-wise-status.png';
import workerChart from '../Pics/14-days.png';
import arrowUp from '../Pics/arrow-upword.png';
import Quiz from '../Pics/Quiz-passing.png';
import dailyTraining from '../Pics/Daily Training-chart.png';

const Dashboard = () => {

    return (
      <div className="dashboard">
        <div className="dashboard-g1">
            <div className="dashboard-g1-p1">
               <div>
                  <h6>In Traning Wokers</h6>
               </div>
               <div className="body">
                    <div className="left side">
                        <div className="number">3,354</div>
                        <div className="icon-container">
                            <div className="icon">
                               <img src={pic2} alt="Icon" className="icon-image" />
                               <div className="percentage">20%</div>
                            </div>
                            <div className="icon-number">234</div>
                        </div>
                    </div>
                    <div>
                    <div className="vector-container">
                       <img src={vector} alt="Vector" className="vector-image" />
                    </div>
                    <div className="days-of-week">
                       <span>M</span>
                       <span>T</span>
                       <span>W</span>
                       <span>T</span>
                       <span>F</span>
                       <span>S</span>
                       <span>S</span>
                    </div>
                    </div>
               </div>
            </div>
            <div className="dashboard-g1-p2">
            <div>
                  <h6>Video Watch-Time (Hrs)</h6>
               </div>
               <div className="body">
                    <div className="left side">
                        <div className="number">2,433</div>
                        <div className="icon-container">
                            <div className="red-icon">
                                <img src={redPic2} alt="Icon" className="icon-image" />
                                <div className="percentage">20%</div>
                            </div>
                            <div className="icon-number">435</div>
                        </div>
                    </div>
                    <div>
                    <div className="vector-container">
                       <img src={redVector} alt="Vector" className="vector-image" />
                    </div>
                    <div className="days-of-week">
                       <span>M</span>
                       <span>T</span>
                       <span>W</span>
                       <span>T</span>
                       <span>F</span>
                       <span>S</span>
                       <span>S</span>
                    </div>
                    </div>
               </div>
            </div>
            <div className="dashboard-g1-p3">
            <div>
                  <h6>% Workers Passing Quiz</h6>
               </div>
               <div className="body">
                    <div className="left side">
                        <div className="number">95%</div>
                        <div className="icon-container">
                            <div className="icon">
                                <img src={pic2} alt="Icon" className="icon-image" />
                                <div className="percentage">20%</div>
                            </div> 
                            <div className="icon-number">24%</div>
                        </div>
                    </div>
                    <div>
                    <div className="vector-container">
                       <img src={vector} alt="Vector" className="vector-image" />
                    </div>
                    <div className="days-of-week">
                       <span>M</span>
                       <span>T</span>
                       <span>W</span>
                       <span>T</span>
                       <span>F</span>
                       <span>S</span>
                       <span>S</span>
                    </div>
                    </div>
               </div>
            </div>
            <div className="dashboard-g1-p4">
            <div>
                  <h6>Avg. Days Taken </h6>
               </div>
               <div className="body">
                    <div className="left side">
                        <div className="number">6</div>
                        <div className="icon-container">
                            <div className="icon">
                                <img src={pic2} alt="Icon" className="icon-image" />
                                <div className="percentage">20%</div>
                            </div>
                            <div className="icon-number">3</div>
                        </div>
                    </div>
                    <div>
                    <div className="vector-container">
                       <img src={vector} alt="Vector" className="vector-image" />
                    </div>
                    <div className="days-of-week">
                       <span>M</span>
                       <span>T</span>
                       <span>W</span>
                       <span>T</span>
                       <span>F</span>
                       <span>S</span>
                       <span>S</span>
                    </div>
                    </div>
               </div>
            </div>
        </div>
        <div className="dashboard-g2">
            <div className="dashboard-g2-p1">
                <div>
                    <h6>Chapter Wise Status</h6>
                </div>
                <div className="chart-container">
                   <img src={ChapterStatus} alt="pic" className="pie-chart" />
                </div>
                <div className="caption">
                    <div className="caption-left">
                        <p className="cap-1">Finished Training</p>
                        <p className="cap-2">Chapter B</p>
                        <p className="cap-3">Haven't Started Yet</p>
                    </div>
                    <div className="caption-right">
                        <p className="cap-4">Chapter A</p>
                        <p className="cap-5">Chapter C</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-g2-p2">
                <div className="g2-p2-heading">
                    <h6>Last 14 Days Active Workers In Training</h6>
                    <h6>Last 14 Days</h6>
                </div>
                <div className="day-training">
                    <div className="active-workers">
                        <span>400</span>
                        <span>300</span>
                        <span>200</span>
                        <span>100</span>
                        <span>0</span>
                    </div>
                    <div>
                        <img src={workerChart} alt="workerChart" className="workerChart" />
                    </div>
                </div>
                <div className="days">
                        <span>3 Jan</span>
                        <span>4 Jan</span>
                        <span>5 Jan</span>
                        <span>6 Jan</span>
                        <span>7 Jan</span>
                        <span>8 Jan</span>
                        <span>9 Jan</span>
                        <span>10 Jan</span>
                        <span>11 Jan</span>
                        <span>12 Jan</span>
                        <span>13 Jan</span>
                        <span>14 Jan</span>
                    </div>
            </div>
        </div>
        <div className="dashboard-g3">
            <div className="dashboard-g3-p1">
                <div className="heading ">
                    <h6>Monthly Training Activity</h6>
                </div>
                <div className="brief">
                    <img src={arrowUp} alt="arrow" />
                    <p>16% more enrollees this month</p>
                </div>
                <div>
                    <p className="course">course a</p>
                    <p className="course-del">23 Workers Took This Course This Week</p>
                </div>
                <div>
                    <p className="course">course b</p>
                    <p className="course-del">253 Workers Took This Course This Week</p>
                </div>
                <div>
                    <p className="course">course c</p>
                    <p className="course-del">253 Workers Took This Course This Week</p>
                </div>
                <div>
                    <p className="course">course c</p>
                    <p className="course-del">253 Workers Took This Course This Week</p>                    
                </div>
            </div>
            <div className="dashboard-g3-p2">
                <div>
                    <h6>Quiz Passing %</h6>
                </div>
                <div className="g3-p2-body">
                  <div>
                    <img src={Quiz} alt="quiz-chart" className="quiz" />
                  </div>
                  <div className="label">
                    <div className="label-pas">
                       <p className="label-head-pas">passed</p>
                       <p className="label-del-pas">1423 Worker</p>
                    </div>
                    <div className="label-fail">
                        <p className="label-head-fail">failed</p>
                        <p className="label-del-fail">134 Workers</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="dashboard-g3-p3">
                <div className="g2-p2-heading">
                    <h6>Daily Training Completions</h6>
                    <h6>Last 7 Days</h6>
                </div>
                <div className="training">
                  <div className="training-no">
                    <span>160</span>
                    <span>120</span>
                    <span>80</span>
                    <span>40</span>
                    <span>0</span>
                  </div>
                  <div>
                    <img src={dailyTraining} alt="dailyTraining" className="daily-training" />
                  </div>
                </div>
                <div className="training-days">
                    <span>S</span>
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Dashboard;