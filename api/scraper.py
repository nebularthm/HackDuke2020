# -*- coding: utf-8 -*-
"""
Created on Sat Dec  5 14:36:48 2020

@author: schmi
"""


from bs4 import BeautifulSoup
import datetime
import requests
class Scraper:
    def __init__(self,state,position,seat = -1,year=datetime.datetime.now().year):
        self.state = "North_Carolina"
        self.state_abbrev = "nc"
        self.position = "intermediate_appellate_court"
        self.seat = seat
        self.year = year
        return
    def scrape(self):
        #scrape starting pages to get sets of links for individual races
        start_url = "https://ballotpedia.org/" + self.state + "_" + self.position + "_elections,_" + str(self.year)
        start_page = requests.get(start_url).text
        #print(start_page.text)
        soup = BeautifulSoup(start_page,'html.parser')
        races = []
        for item in soup.find_all("h3"):
            if not (item.next_sibling.next_sibling.span == None):
                clist = item.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling
                race = []
                for text in clist.find_all("a"):
                    if not (text.string==None):
                        race.append(text.string)
                races.append(race)
        #for r in races:
            #print(r[0]+ " vs " + r[1])
        return races
    # returns top N campaign contributors (default 5): names, contribution amounts, and 
    # type (entity/individual) in a list of lists containting this information.
    def contributions(self,candidate="Tricia_Shields", topN =5):
        candidate = candidate.replace("_","-")
        url = "https://www.transparencyusa.org/" + self.state_abbrev + "/candidate/" + candidate
        candidate_page = requests.get(url).text
        soup = BeautifulSoup(candidate_page,'html.parser')
        table = soup.find("table",attrs={"aria-colcount":3})
        rows = table.find_all("tr")
        row = 0
        contributors = []
        while row <= topN:
            currentrow = rows[row]
            data = currentrow.find_all("td")
            data_group = []
            for d in data:
                data_group.append(d.string)
            contributors.append(data_group)
            row = row+1
        return contributors
        
            
if __name__=="__main__":
    s = Scraper("North_Carolina","intermediate_appellate_court")
    s.scrape()
    s.contributions()